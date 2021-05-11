import React, { memo } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from 'react-simple-maps';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip='' projectionConfig={{ scale: 1000 }} projection='geoAlbersUsa'>
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    stroke='#6979c9'
                    geography={geo}
                    fill='#474d84'
                    onMouseEnter={() => {
                      const { name } = geo.properties;
                      setTooltipContent(`${name}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('');
                    }}
                    style={{
                      default: {
                        fill: '#474d84',
                        outline: 'none',
                      },
                      hover: {
                        fill: '#354d84',
                        outline: 'none',
                      },
                      pressed: {
                        fill: '#354d84',
                        outline: 'none',
                      },
                    }}
                  />
                ))}
              </>
            )}
          </Geographies>
          <Marker coordinates={[-99.006, 39.8928]}>
            <text textAnchor='middle' fill='rgba(244,244,245,.6)'>
              GEO-LOCATIONS
            </text>
          </Marker>
          <Marker coordinates={[-99.006, 38.8928]}>
            <text textAnchor='middle' fill='rgba(244,244,245,.6)'>
              1 656 843
            </text>
          </Marker>
          <Marker coordinates={[-99.006, 28.8928]}>
            <circle r={6} fill='#c7d0ff' />
          </Marker>
          <Marker coordinates={[-89.006, 28.8228]}>
            <circle r={9} fill='#c7d0ff' />
          </Marker>
          <Marker coordinates={[-112.006, 40.8928]}>
            <circle r={2} fill='#c7d0ff' />
          </Marker>
          <Marker coordinates={[-90.006, 34.8928]}>
            <circle r={7} fill='#c7d0ff' />
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
