import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hydrabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Bankend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];

const FilterCard = () => {
  return (
    <div>
      <h1>Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {
              data.array.map((item,index)=>{
                return(
                  <div key={index} className="flex items-center space-x-2 my-2">
                    <RadioGroupItem value={item}/>
                    <Label>{item}</Label>
                  </div>
                )
              })
            }
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
