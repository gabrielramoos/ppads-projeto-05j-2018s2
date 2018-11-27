import React from 'react'
import AnatelLayout from 'layouts/AnatelLayout'
import Auth from 'utils/AuthService'

import { Input, Label } from 'reactstrap' 

import Chart from 'components/Chart'

class AccessPage extends React.Component {
  state = {
    chartData: {},
    regions: [],
    states: [],
    loading: true,
    minorLoading: true
  }

  async componentDidMount() {
    document.title = 'Painel da Anatel'
    let regions = [ { Regiao: 'Todas Regiões', Cod_Regiao: 0 } ]
    const chart = (await Auth.request('has_connection/')).data
    let regionData = (await Auth.request('regions/')).data
    this.setState({ chartData: chart, regions: regions.concat(regionData), loading: false, minorLoading: false})
  }

  changeRegion = async(event) => {
    const value = event.target.value
    let states = [ { UF: 'Todos os Estados', Cod_Estado: 0 } ]
    const newChart = (await Auth.request('has_connection/region/'+value)).data
    let statesData = (await Auth.request('states/'+value)).data
    this.setState({ chartData: newChart, states: states.concat(statesData) })
  }

  changeState = async(event) => {
    this.setState({ minorLoading: true })
    const value = event.target.value
    const newChart = (await Auth.request('has_connection/state/'+value)).data
    this.setState({ chartData: newChart, minorLoading: false })
  }

  render() {
    return (
      <AnatelLayout title="Painel da Anatel" loading={this.state.loading}>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h3>Regiões sem Conexão com a Internet - Caso de uso 03</h3>
                <div className="card">
                  <div className="card-header card-header-icon card-header-primary">
                    <div className="card-icon">
                      <i className="material-icons">settings</i>
                    </div>
                    <h4 className="card-title">
                      ANATEL - Filtros de Busca
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Label
                        style={{ marginLeft: '20px' }}
                      >
                        Escolha uma Região
                      </Label>
                      <Label
                        className="col-md-3"
                        style={{ paddingLeft: 0 }}
                      >
                        Escolha um Estado
                      </Label>
                    </div>
                    <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Input
                        type="select"
                        name="refuse"
                        id="motivo"
                        className="col-md-3"
                        onChange={this.changeRegion}
                        style={{ marginLeft: '20px' }}
                      >
                        {this.state.regions.map((r) => {
                          return <option key={r.Cod_Regiao} value={r.Cod_Regiao}>{r.Regiao}</option>
                        })}
                      </Input>
                      <Input
                        type="select"
                        name="refuse"
                        id="motivo"
                        onChange={this.changeState}
                        className="col-md-3"
                      >
                        {this.state.states.map((e) => {
                          return <option key={e.Cod_Estado} value={e.Cod_Estado}>{e.UF}</option>
                        })}
                      </Input>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header card-header-icon card-header-primary">
                    <div className="card-icon">
                      <i className="material-icons">bar_chart</i>
                    </div>
                    <h4 className="card-title">
                      Gráfico de acessos que possuem internet com velocidade baixa
                    </h4>
                  </div>
                  <div className="card-body">
                    {!this.state.minorLoading ? 
                      <Chart data={this.state.chartData} isLow={false} /> 
                      : 
                      <h2 style={{marginTop: '30px', textAlign: 'center'}}>Carregando novas informações, por favor aguarde....</h2>
                    }
                    <br />
                    <div style={{ textAlign: 'center' }}>
                      Quantidade Total de Acessos que possuem internet com baixa velocidade, ou seja, entre as faixas de 0 a 512kbps e 512kbps a 2mbps.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnatelLayout>
    )
  }
}

export default AccessPage
