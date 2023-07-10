import { useRef, useState } from "react";

function App() {
  const [data] = useState([
    {
      title: "ABC",
      content: "XYZ",
    },
    {
      title: "How often is the content updated on XYZ Tech News Company?",
      content:
        "At XYZ Tech News Company, we understand the importance of staying up-to-date with the latest tech news. Therefore, we update our content on a daily basis. Our team of experienced writers and editors work diligently to bring you timely and accurate news articles, reviews, and analysis.",
    },
  ]);
  return (
    <div className="wrapper">
      <div className="title">XYZ Tech News FAQ</div>
      {data.map((item, index) => {
        return <Item item={item} key={index} />;
      })}
    </div>
  );
}

function Item(props) {
  const [isOpen, setOpen] = useState(false);
  const contentRef = useRef();
  const onClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`item-wrapper ${isOpen ? "active" : ""}`} onClick={onClick}>
      <div className="item-title" data-index={0}>
        {props.item.title}
      </div>
      <div
        className="content-outer"
        style={{
          height: isOpen ? contentRef.current.clientHeight : 0,
        }}
      >
        <div className="content" ref={contentRef}>
          {props.item.content}
        </div>
      </div>
    </div>
  );
}

export default App;
