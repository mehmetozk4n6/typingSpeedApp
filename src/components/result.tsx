import { useAppSelector } from "../redux/hooks";
import { selectIsTrueText, selectSituation, selectTextGenerator } from "../redux/typingSlice";
import { Result } from "./styled/Result.styled";

const ResultTyping = () => {
  const situation = useAppSelector(selectSituation);
  const isTrueText = useAppSelector(selectIsTrueText);
  const textGenerator = useAppSelector(selectTextGenerator);
  let total;
  let trueText;
  let falseText;
  let totalTrueLetter = 0;
  let totalFalseLetter = 0;
  let ratio: number | undefined;
  if (situation === "finished") {
    total = isTrueText.length;
    trueText = isTrueText.filter((text) => text === true).length;
    falseText = isTrueText.filter((text) => text === false).length;
    ratio = trueText>0 ? (trueText / total) * 100:0;
    isTrueText.forEach((istrue,index) => {
      if(istrue){
        totalTrueLetter += textGenerator[index].length;
      }else{
        totalFalseLetter += textGenerator[index].length;
      }
    } )
  }
  return (
    <Result>
      <table>
        <thead>
          <th>
            <td>Your Result</td>
            <td></td>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              Word Per Minute
            </td>
            <td>
              {trueText}
            </td>
          </tr>
          <tr>
            <td>
              Total Letter
            </td>
            <td>
              (<span className="trueType">{totalTrueLetter}</span> | <span className="falseType">{totalFalseLetter}</span>) <b>{totalFalseLetter+totalTrueLetter}</b>
            </td>
          </tr>
          <tr>
            <td>Ratio</td>
            <td>
              {"%"} {ratio}
            </td>
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
