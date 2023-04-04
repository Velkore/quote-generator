import React from "react";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import AddQuote from "./AddQuote";
import DeleteQuote from "./DeleteQuote";
import UpdateQuote from "./UpdateQuote";

function DropMenu(props) {
  return (
    <div className="mx-5 mt-3">
      <DropdownButton
        as={ButtonGroup}
        id="dropmenu"
        variant="dark"
        menuVariant="dark"
        title="Menu"
        size="lg"
        drop="down-centered"
      >
        <AddQuote
          refreshList={props.customQuotes}
          setIsSuccess={props.setIsSuccess}
        />
        <DeleteQuote
          backendData={props.backendData}
          refreshList={props.customQuotes}
        />
        <UpdateQuote
          refreshList={props.customQuotes}
          setIsSuccess={props.setIsSuccess}
          backendData={props.backendData}
        />
        <Dropdown.Divider />
        <Dropdown.Item as="button" onClick={props.handleClick}>
          Random Quote
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item as="button" onClick={props.customQuotes}>
          Personal Quotes
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default DropMenu;
