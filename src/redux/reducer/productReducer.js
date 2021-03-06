// interface IProduct {
//   id: int;
//   name: string;
//   description: string;
//   in_stock: boolean;
//   tags?: string[];
//   date: bigInt;
//   updated?: bigInt;
// }

const Initial_State = {
  products: [
    {
      id: 1,
      name: "name1",
      description: "Desc1",
      in_stock: false,
      tags: ["tag1"],
      date: 1611163802,
      updated: 1611164802,
    },
    {
      id: 2,
      name: "name2",
      description: "Desc2",
      in_stock: true,
      date: 1577836800,
      updated: null,
    },
    {
      id: 3,
      name: "name3",
      description: "Desc3",
      in_stock: true,
      date: 1588291200,
      updated: null,
    },
    {
      id: 4,
      name: "name4",
      description: "Desc4",
      in_stock: false,
      tags: ["tagX"],
      date: 1598291200,
      updated: 1598291200,
    },
  ],
};

export const productReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      return { ...state, products: action.updatedProducts };
      break;

    default:
      return { ...state };
      break;
  }
};
