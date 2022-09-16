/* eslint-disable react/no-array-index-key */
import React from 'react';

type props = {
  sendTags: React.Dispatch<React.SetStateAction<any>>,
  tag: React.SetStateAction<any>

}
// type props = HTMLAttributes<HTMLInputElement> & {
//   handleChange: React.ChangeEvent<HTMLInputElement>,
//   handleValue: string [],
// }

function Tag({ sendTags, tag }: props) {
  // const [tags, setTags] = useState<any>([]);
  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key !== 'Enter') return;
    const target = e.target as HTMLInputElement;
    const { value } = target;
    if (!value.trim()) return;
    sendTags([...tag, value]);
    target.value = '';
  }
  const removeTag = (index:number) => {
    sendTags(tag.filter((el:any, i:number) => i !== index));
  };
  return (
    <div className="tag">
      <div className="tags-input-container">
        {
      tag?.map((tags: string, index:number) => (
        <div className="tag-item" key={index}>
          <span className="text">{tags}</span>
          <span className="close" onClick={() => removeTag(index)} aria-hidden="true">&times;</span>
        </div>
      ))
      }
        <input
          type="text"
          name="inputTag"
          onKeyDown={handleKeyDown}
          className="tags-input"
          placeholder="Type somthing"
        />
      </div>
    </div>
  );
}
export default Tag;
