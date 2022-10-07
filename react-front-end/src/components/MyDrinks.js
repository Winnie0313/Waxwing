import { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import { Flex, CardFlex } from "./Search/CardStyles";
import Error from "./Error";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function MyDrinks() {
  const erroMsg = "your list is empty ...";
  const { data, setData } = useContext(MyContext);

  const handleRemoveItem = (id) => {
    const dataAfterDelet = data.filter((item) => item.id !== id);
    localStorage.setItem("myDrinks", JSON.stringify(dataAfterDelet));
    setData(dataAfterDelet);
  };

  /// to updatae the list when a drink is deleted
  useEffect(() => {
    const check = localStorage.getItem("myDrinks");
    if (check) {
      const localData = JSON.parse(check);
      setData(localData);
    }
  }, [setData]);

  /// modal
  const [modalView, setModalView] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleModal = (item) => {
    setModalView(true);
    setSelectedItem(item);
  };

  return (
    <div>
      <h2> My Drinks</h2>
      <Button as={Link} to="/NewCocktail">
        {" "}
        Add New cocktail{" "}
      </Button>

      <Flex
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {data.length !== 0 ? (
          <>
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <CardFlex key={item.id}>
                    <Link onClick={() => handleModal(item)}>
                      <img src={item.image} alt={item.cocktailName} />
                      <h4> {item.cocktailName}</h4>
                    </Link>
                    <Button
                      variant="danger"
                      id={item.id}
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Delete
                    </Button>

                    {/* <Button onClick={() => handleModal(item)}>View</Button> */}
                  </CardFlex>
                </div>
              );
            })}
            {selectedItem && (
              <Modal
                centered
                size="lg"
                show={modalView}
                onHide={() => setModalView(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title>{selectedItem.cocktailName}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.cocktailName}
                  />

                  <h4>Category</h4>
                  <p>{selectedItem.category}</p>

                  <h4>Alcoholic/Non-Alcoholic</h4>
                  <p>{selectedItem.category}</p>
                </Modal.Body>

                <Modal.Footer>
                  <h6>Like what you see?</h6>
                  <Button
                    variant="outline-dark"
                    as={Link}
                    to={"/Myrecipe/" + selectedItem.id}
                  >
                    VIEW RECIPE PAGE
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
          </>
        ) : (
          <>
            <Error message={erroMsg} />
          </>
        )}
      </Flex>
    </div>
  );
}

export default MyDrinks;
