const getAdaptedData = (data, adapter) => data.map((item) => adapter(item));

export default getAdaptedData;
