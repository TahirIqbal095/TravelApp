import {
  Input,
  Select,
  SelectItem,
  DatePicker,
  Button,
} from "@nextui-org/react";

function Form() {
  return (
    <form
      action="submit"
      method="post"
      className="block px-5 py-8 bg-white mx-6 md:mx-10 shadow rounded"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
        <Input type="text" variant="bordered" label="Name" />
        <Input type="email" variant="bordered" label="Email" />
        <Input type="number" variant="bordered" label="Phone Number" />

        <Select label="Select Destination">
          <SelectItem key="pahalgam">Pahalgam</SelectItem>
          <SelectItem key="gulmarg">Gulmarg</SelectItem>
          <SelectItem key="margantop">Margan Top</SelectItem>
          <SelectItem key="Daksum">Daksum</SelectItem>
          <SelectItem key="verinag">Verinag</SelectItem>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center mt-2">
        <Select label="No. of Adults">
          <SelectItem key="1">1</SelectItem>
          <SelectItem key="2">2</SelectItem>
          <SelectItem key="3">3</SelectItem>
          <SelectItem key="4">4</SelectItem>
          <SelectItem key="5">5</SelectItem>
        </Select>

        <Select label="No. of Child" className="p-1">
          <SelectItem key="1">1</SelectItem>
          <SelectItem key="2">2</SelectItem>
          <SelectItem key="3">3</SelectItem>
          <SelectItem key="4">4</SelectItem>
          <SelectItem key="5">5</SelectItem>
        </Select>

        <DatePicker aria-label="select a date" />

        <Button color="primary" className="mt-2 md:mt-0">
          Send Enquiry
        </Button>
      </div>
    </form>
  );
}

export default Form;
