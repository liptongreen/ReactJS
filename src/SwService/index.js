import React from "react";
import { withData, withChildFunction } from "../hoc";

import ItemDetails from "../components/item-details";
import Record from "../components/Record";
import SwapiService from "../services/swapi-service";

import ItemList from "../components/item-list";
import { withConnect } from "../hoc";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const renderName = (item) => `${item.name}`;

const RenderPersonaList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);

const renderPersonaDetail = ({ itemid, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
  return (
    <ItemDetails
      selectedItem={itemid}
      getPerson={getPerson}
      getImage={getPersonImage}
      getMessage={"Нужно выбрать персонада"}
    >
      <Record label={`Gender`} field={`gender`} />
      <Record label={`Birth Year`} field={`birthYear`} />
      <Record label={`Eye Color`} field={`eyeColor`} />
    </ItemDetails>
  );
};
const RenderPersonaDetail = withConnect(renderPersonaDetail);

const RenderPlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);
const renderPlanetDetail = ({ itemid, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;
  return (
    <ItemDetails
      selectedItem={itemid}
      getPerson={getPlanet}
      getImage={getPlanetImage}
      getMessage={"Нужно выбрать планету"}
    >
      <Record label={`Population`} field={`population`} />
      <Record label={`Rotation period`} field={`rotationPeriod`} />
      <Record label={`Diametr`} field={`diameter`} />
    </ItemDetails>
  );
};
const RenderPlanetDetail = withConnect(renderPlanetDetail);

const RenderStarshipList = withData(
  withChildFunction(ItemList, renderName),
  getAllStarships
);
const renderStarshipDetail = ({ itemid, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;
  return (
    <ItemDetails
      selectedItem={itemid}
      getPerson={getStarship}
      getImage={getStarshipImage}
      getMessage={"Нужно выбрать корабль"}
    >
      <Record label={`Model`} field={`model`} />
      <Record label={`Manufacturer`} field={`manufacturer`} />
      <Record label={`Cost`} field={`costInCredits`} />
    </ItemDetails>
  );
};
const RenderStarshipDetail = withConnect(renderStarshipDetail);
export {
  RenderPersonaList,
  RenderPersonaDetail,
  RenderPlanetList,
  RenderPlanetDetail,
  RenderStarshipList,
  RenderStarshipDetail,
};
