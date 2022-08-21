import { useAppSelector } from "../redux/hooks";
import { selectIsTrueText, selectSituation } from "../redux/typingSlice";
import { Result } from "./styled/Result.styled";

const ResultTyping = () => {
  const situation = useAppSelector(selectSituation);
  const isTrueText = useAppSelector(selectIsTrueText);
  let total;
  let trueText;
  let falseText;
  let ratio:number|undefined;
  if (situation === "finished") {
    total = isTrueText.length;
    trueText = isTrueText.filter((text) => text === true).length;
    falseText = isTrueText.filter((text) => text === false).length;
    ratio = trueText / total*100;
  }
  return (
    <Result>
      <table>
        <thead><th>
          <td>Result</td>
          <td></td>
        </th></thead>
        <tbody>
        <tr>
          <td>Ratio</td>
          <td>{"%"} {ratio}</td>
        </tr>
        <tr>
          <td>True Word</td>
          <td>{trueText}</td>
        </tr>
        <tr>
          <td>False Word</td>
          <td>{falseText}</td>
        </tr>
        </tbody>
        
      </table>
    </Result>
  );
};

export default ResultTyping;
