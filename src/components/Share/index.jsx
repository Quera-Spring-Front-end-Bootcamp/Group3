import { ArrowDown } from "../../assets/icons";
import Card from "../Card/Card";

const Share = () => {
  const options = ['دسترسی کامل', 'ویرایش', 'مشاهده'];
  const onOptionChangeHandler = (event) => {
      console.log("User Selected Value - ", event.target.value)
  }

  return <Card>
    <ArrowDown/>
    <select onChange={onOptionChangeHandler}>
  
  <option><ArrowDown/></option>
  {options.map((option, index) => {
      return <option key={index} >
          {option}
      </option>
      
  })}
</select>
  </Card>;
};

export default Share;
