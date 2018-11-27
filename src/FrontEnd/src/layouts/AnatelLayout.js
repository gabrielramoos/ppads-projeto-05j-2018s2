import React from "react";
import Sidebar from "components/Sidebar";
import Loader from "components/Loader";

const menu = [
  {
    id: 0,
    menu: [
      {
        text: "Baixa Conexão",
        href: "/",
        icon: "map-marker"
      },
      {
        text: "Sem Internet",
        href: "/semacesso",
        icon: "map-marked"
      },
      {
        text: "Maiores Vendas",
        href: "/empresas",
        icon: "building"
      }
    ]
  }
];

const AnatelLayout = ({ children, title, loading }) => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Sidebar menu={menu} title="Sidebar" />
        <div className="main-panel">
          {loading && <Loader />}
          {!loading && children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AnatelLayout;
