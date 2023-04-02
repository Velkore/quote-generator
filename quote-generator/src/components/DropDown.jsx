import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import AddQuote from "./AddQuote";

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
        <AddQuote />
        <Dropdown.Item as="button">Remove</Dropdown.Item>
        <Dropdown.Item as="button">Update</Dropdown.Item>
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
