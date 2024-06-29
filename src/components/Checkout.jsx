// import { Fragment, useContext, useState } from "react";
// import { CartContext } from "../../context/CartContext";
// import { useForm } from "react-hook-form";
// import { collection, addDoc, Timestamp } from "firebase/firestore";
// import { db } from "../firebase/config";

// export const Checkout = () => {
//   const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
//   const { register, handleSubmit } = useForm();
//   let [docId, setDocId] = useState("");

//   const comprar = (data) => {
//     const pedido = {
//       cliente: data,
//       productos: carrito,
//       total: calcularTotal(),
//       fecha: Timestamp.now(),
//     };

//     const pedidosRef = collection(db, "pedidos");

//     addDoc(pedidosRef, pedido).then((doc) => {
//       setDocId(doc.id);
//       vaciarCarrito();
//     });
//   };

//   if (docId) {
//     return (
//       <div className="container mt-4">
//         <h1>Gracias por tu compra!</h1>
//         <p>Con este código podés hacer el seguimiento de tu pedido: {docId}</p>
//       </div>
//     );
//   }

//   return (
//     <Fragment>
//       <div className="container mt-2">
//         <h1>Finalizar compra </h1>
//         <form className="container" onSubmit={handleSubmit(comprar)}>
//           <div class="form-row">
//             <div class="form-group col-md-6 mb-2">
//               <input
//                 type="text"
//                 class="form-control mb-2"
//                 id="inputCity"
//                 placeholder="Ingrese su nombre"
//                 {...register("nombre")}
//               ></input>

//               <input
//                 type="email"
//                 class="form-control"
//                 id="inputEmail4"
//                 placeholder="Ingrese su email"
//                 {...register("email")}
//               ></input>
//             </div>
//           </div>

//           <button id="botones" className="btn btn-sm" type="submit">
//             Comprar
//           </button>
//         </form>
//       </div>
//     </Fragment>
//   );
// };

import { Fragment, useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export const Checkout = () => {
  const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [docId, setDocId] = useState("");

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: calcularTotal(),
      fecha: Timestamp.now(),
    };

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setDocId(doc.id);
      vaciarCarrito();
    });
  };

  if (docId) {
    return (
      <div className="container mt-4">
        <h1>Gracias por tu compra!</h1>
        <p>Con este código podés hacer el seguimiento de tu pedido: {docId}</p>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="container mt-2">
        <h1>Finalizar compra</h1>
        <form className="container" onSubmit={handleSubmit(comprar)}>
          <div className="form-row">
            <div className="form-group col-md-6 mb-2">
              <input
                type="text"
                className={`form-control mb-2 ${
                  errors.nombre ? "is-invalid" : ""
                }`}
                id="inputCity"
                placeholder="Ingrese su nombre"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                })}
              />
              {errors.nombre && (
                <div className="invalid-feedback">{errors.nombre.message}</div>
              )}

              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="inputEmail4"
                placeholder="Ingrese su email"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Ingrese un email válido",
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
          </div>

          <button id="botones" className="btn btn-sm" type="submit">
            Comprar
          </button>
        </form>
      </div>
    </Fragment>
  );
};
