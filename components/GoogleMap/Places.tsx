import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
  } from "@reach/combobox";
  import "@reach/combobox/styles.css";
import { LatLngLiteral } from "../../utils/types";
  
  type PlacesProps = {
    setDestination: (position: LatLngLiteral) => void;
    setAddress?: (val: string) => any,
  };
  
 const Places = ({ setDestination, setAddress }: PlacesProps) =>  {
    const {
      ready,
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions,
    } = usePlacesAutocomplete({
        debounce: 1000,
    });
  
    const handleSelect = async (val: string) => {
      setValue(val, false);
      clearSuggestions();
      
      const results = await getGeocode({ address: val });
      const { lat, lng } = await getLatLng(results[0]);

      setAddress(val)
      setDestination({lat, lng});
    };
  
    return (
      <Combobox onSelect={handleSelect} className={'w-full h-auto pt-5'}>
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
          disabled={!ready}
          className="flex items-center rounded-[5px] w-full h-full p-[10px] outline-none text-white bg-[#2D303E] "
          placeholder="Enter your address"
        />
        <div className="w-full h-auto bg-[#2D303E] rounded-md  overflow-hidden text-white">
            {status === "OK" &&
                data.map(({ place_id, description }) => (
                    <ComboboxOption key={place_id} value={description} className={'px-2 !py-3 font-semibold cursor-pointer hover:!bg-[#2f313ac1]'} />
            ))}
        </div>
      </Combobox>
    );
  }
  
export default Places