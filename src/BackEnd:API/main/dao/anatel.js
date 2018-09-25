const knex = require('../../db/knex');

function getAll() {
  return knex('Acesso2')
    .join('Municipio', 'Municipio.Cod_Municipio', '=', 'Acesso2.COD_MUNICIPIO')
    .join('Estado', 'Estado.Cod_Estado', '=', 'Municipio.Cod_Municipio')
    .join('Regiao', 'Regiao.Cod_Regiao', '=', 'Estado.Cod_Regiao')
    .count('Acesso2.COD_ACESSO as quantity')
    .select('Regiao.Regiao as label')
    .groupBy('Regiao')
    .orWhere({ 'Acesso2.Cod_Faixa': 2, 'Acesso2.Cod_Faixa': 3 })
    .orderBy('Regiao.Regiao')    
}

function getByRegion(Cod_Regiao) {
  return knex('Acesso2')
    .join('Municipio', 'Municipio.Cod_Municipio', '=', 'Acesso2.COD_MUNICIPIO')
    .join('Estado', 'Estado.Cod_Estado', '=', 'Municipio.Cod_Municipio')
    .count('Acesso2.COD_ACESSO as quantity')
    .select('Estado.UF as label')
    .groupBy('Estado.UF')
    .orWhere({ 'Acesso2.Cod_Faixa': 3, 'Acesso2.Cod_Faixa': 2 })
    .andWhere('Estado.Cod_Regiao', Cod_Regiao)
    .orderBy('quantity', 'DESC')
}

function getByState(Cod_State) {
  return knex.raw(`SELECT COUNT(COD_ACESSO) as quantity, Anatel.Municipio.Municipio as label FROM Anatel.Acesso2
  JOIN Anatel.Municipio ON Anatel.Municipio.Cod_Municipio = Anatel.Acesso2.COD_MUNICIPIO
  WHERE (COD_FAIXA = 2 OR COD_FAIXA = 3) AND Anatel.Municipio.Cod_Estado = ${Cod_State}
  GROUP BY Anatel.Municipio.Municipio
  ORDER BY quantity DESC
  LIMIT 5;`)
}

function getRegions() {
  return knex('Regiao')
    .select('Regiao.Regiao', 'Regiao.Cod_Regiao')
    .orderBy('Regiao.Regiao')    
}

function getStates(Cod_Regiao) {
  return knex('Estado')
    .select('Estado.UF', 'Estado.Cod_Estado')
    .orderBy('Estado.UF')
    .where('Estado.Cod_Regiao', Cod_Regiao)    
}

module.exports = {
  getAll,
  getByRegion,
  getByState,
  getRegions,
  getStates
};