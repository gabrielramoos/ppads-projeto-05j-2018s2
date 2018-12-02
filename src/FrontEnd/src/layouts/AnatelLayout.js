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
        text: "Maiores Fornecedores",
        href: "/empresas",
        icon: "building"
      }
    ]
  }
];

const AnatelLayout = ({ children, loading }) => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" style={{float: 'right', paddingRight: '30px', paddingTop: '30px'}}>
          <i className="fa fa-bars fa-2x"></i>
        </button>
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
