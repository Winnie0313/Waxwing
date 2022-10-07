import { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import { Flex, CardFlex } from "./Search/CardStyles";
import Error from "./Error";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { TiDeleteOutline } from "react-icons/ti";
import Styled from "styled-components";

function MyDrinks() {
  const erroMsg = "your list is empty ...";
  const { data, setData } = useContext(MyContext);

  /// to delete my new drinks
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

  /// to show modal
  const [modalView, setModalView] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleModal = (item) => {
    setModalView(true);
    setSelectedItem(item);
  };

  return (
    <div>
      <h2> My Cocktails</h2>
      <Button variant="dark" as={Link} to="/NewCocktail">
        Add New Cocktail
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
                      <TiDeleteOutline size="2rem" />
                    </Button>
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
                  <Modal.Title>
                    <div className="modal-title">
                      <h1> {selectedItem.cocktailName}</h1>
                    </div>
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.cocktailName}
                    className="modal-image"
                  />

                  <h4 className="modal-ingredient">Main Ingredient</h4>
                  <p>{selectedItem.ingredient1}</p>

                  <h4 className="modal-category">Category</h4>
                  <p>{selectedItem.category}</p>

                  <h4 className="modal-alcohol">Alcoholic/Non-Alcoholic</h4>
                  <p>{selectedItem.alcoholic}</p>
                </Modal.Body>

                <Modal.Footer>
                  <h6>
                    <b>Like what you see?</b>
                  </h6>
                  <Button
                    variant="outline-dark"
                    as={Link}
                    to={"/Myrecipe/" + selectedItem.id}
                  >
                    <b>View The Recipe</b>
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
