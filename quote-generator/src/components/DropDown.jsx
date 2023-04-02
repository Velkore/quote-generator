import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function DropMenu(props) {
  return (
    <div className="mx-auto mt-4 text-center">
      <DropdownButton
        as={ButtonGroup}
        id="dropmenu"
        variant="dark"
        menuVariant="dark"
        title="Menu"
        size="lg"
      >
        <Dropdown.Item as="button">Add</Dropdown.Item>
        <Dropdown.Item as="button">Remove</Dropdown.Item>
        <Dropdown.Item as="button">Update</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item as="button" onClick={props.handleClick}>
          Random Quote
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default DropMenu;
