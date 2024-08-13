// import React from "react";

// const NewsItem = (props) => {
//   return (
//     <div className="my-3 ">
//       <div className="card" style={{ width: "18rem" }}>
//         <img
//           src={
//             !props.imageUrl ? NewsItem.defaultProps.imageUrl : props.imageUrl
//           }
//           className="card-img-top"
//           style={{ height: "50%" }}
//           alt="..."
//         />
//         <div className="card-body">
//           <h5 className="card-title">
//             {!props.title
//               ? NewsItem.defaultProps.title.slice(0, 40)
//               : props.title.slice(0, 40)}
//             ...
//           </h5>
//           <p className="card-text">
//             {!props.description
//               ? NewsItem.defaultProps.description.slice(0, 80)
//               : props.description.slice(0, 80)}
//             ...
//           </p>
//           <a
//             href={props.newsUrl}
//             target="_blank"
//             className="btn btn-primary btn-sm btn-dark"
//             rel="noreferrer"
//           >
//             Read more
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// NewsItem.defaultProps = {
//   title:
//     "Israel-Palestine War Day 2 LIVE Updates: Israeli Air Force bombs Hamas military headquarters in Gaza - CNBCTV18",
//   imageUrl:
//     "https://images.cnbctv18.com/wp-content/uploads/2023/10/402810119-1019x573.jpg",
//   description:
//     "Israel-Palestine War Day 2 LIVE updates: On the second day of war, Israeli soldiers fought to repel Hamas militants and exchanged fire with the Lebanese militant group Hezbollah, raising the prospect of a broader regional conflagration a day after an unpreced…",
// };

// export default NewsItem;

import React from "react";

const NewsItem = (props) => {
  return (
    <div className="my-3 ">
      <div
        className="bg-white drop-shadow-md shadow p-4 rounded-lg "
        style={{ width: "18rem" }}
      >
        <img
          src={
            !props.imageUrl ? NewsItem.defaultProps.imageUrl : props.imageUrl
          }
          className="w-full h-32 object-cover mb-4"
          alt="..."
        />
        <div className="card-body">
          <h5 className="text-lg font-semibold mb-2">
            {!props.title
              ? NewsItem.defaultProps.title.slice(0, 40)
              : props.title.slice(0, 40)}
            ...
          </h5>
          <p className="text-gray-700 mb-4 h-20">
            {!props.description
              ? NewsItem.defaultProps.description.slice(0, 80)
              : props.description.slice(0, 80)}
            ...
          </p>
          <a
            href={props.newsUrl}
            target="_blank"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-black focus:outline-none focus:ring focus:border-blue-300"
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

NewsItem.defaultProps = {
  title: "Not available",
  imageUrl: "Couldn't load",
  description: "Couldn't load",
};

export default NewsItem;
