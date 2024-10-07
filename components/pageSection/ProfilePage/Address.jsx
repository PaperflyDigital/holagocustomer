import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import Button from "@/components/global/Button";
import PhoneInput from "@/components/global/PhoneInput";
import TextInput from "@/components/global/TextInput";
import SelectInput from "@/components/global/SelectInput";
import cities from "@/public/data/city.json";
const AddNewAddress = ({
  refetch = () => {},
  setPage,
  value = {},
  title,
  onSubmit,
}) => {
  const [name, setName] = useState(value.name || "");
  const [phone, setPhone] = useState(value.phone_number || "");
  const [address, setAddress] = useState(value.address || "");
  const [area, setArea] = useState(value.area || "");
  const [state, setState] = useState(value.state || "");
  const [city, setCity] = useState(value.city || cities[0]?.value ||"");
  const [street, setStreet] = useState(value.street || "");
  const [zip_code, setZip_code] = useState(value.zip_code || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    let newAddress;
    if (!value?.id) {
      newAddress = { name, phone_number: phone, address, area, city, zip_code, state, street };
    } else {
      newAddress = { id: value.id, name, phone_number: phone, address, area, city, zip_code, state, street };
    }
    refetch();
    onSubmit(newAddress);
  };
  return (
    <div>
      <IoArrowBack
        size={30}
        onClick={() => setPage("")}
        className="cursor-pointer"
      />

      <p className="text-xl font-medium">{title}</p>
      <p className="text-sm text-[#7f7f7f]">Please input your new address</p>
      <p className="font-medium mt-4 text-[18px]">Shipping address</p>
      <form onSubmit={handleSubmit} className="space-y-2 mt-5">
        <TextInput
          label={"Address name"}
          rounded="full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <PhoneInput
          label={"Phone number"}
          rounded="full"
          value={phone}
          onChange={(combinedValue) => setPhone(combinedValue)}
        />
        <SelectInput value={city} options={cities}  label={"City"} onChange={(e) => setCity(e.target.value)}/>
        <TextInput
          label={"Address"}
          rounded="full"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextInput
          label={"Area"}
          rounded="full"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <TextInput
          label={"Street"}
          rounded="full"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <TextInput
          label={"State"}
          rounded="full"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <TextInput
          label={"Zip code"}
          rounded="full"
          value={zip_code}
          onChange={(e) => setZip_code(e.target.value)}
        />
        <Button type="submit" className="w-full" rounded="full">
          Save
        </Button>
      </form>
    </div>
  );
};

export default AddNewAddress;
