import { PointOfSale } from "../../domain/PointOfSale"

const pointOfSalesStub = [
    new PointOfSale(
        {
            id: 1,
            nombre: "Los Pibes",
            stockDeSobres: 100,
            domicilioPuntoDeVenta: {
                id: 1,
                ubicacionGeograficaX: -1231242431,
                ubicacionGeograficaY: -3125122341,
                calle: "Av. Olazabal",
                numeroCalle: 6878,
                localidad: "CABA",
                provincia: "Buenos Aires",
            },
            tipoPuntoDeVenta: "Libreria",
            pedidosPendientes: 550
        }
    ),
    new PointOfSale(
        {
            id: 2,
            nombre: "Supermercado Chumbo",
            stockDeSobres: 250,
            domicilioPuntoDeVenta: {
                id: 2,
                ubicacionGeograficaX: -1231242431,
                ubicacionGeograficaY: -3125122341,
                calle: "Monroe",
                numeroCalle: 2254,
                localidad: "CABA",
                provincia: "Buenos Aires",
            },
            tipoPuntoDeVenta: "Supermercado",
            pedidosPendientes: 350
        }
    ),
    new PointOfSale(
        {
            id: 3,
            nombre: "Los Pibes",
            stockDeSobres: 98,
            domicilioPuntoDeVenta: {
                id: 3,
                ubicacionGeograficaX: -1231242431,
                ubicacionGeograficaY: -3125122341,
                calle: "Barzana",
                numeroCalle: 1575,
                localidad: "CABA",
                provincia: "Buenos Aires",
            },
            tipoPuntoDeVenta: "Libreria",
            pedidosPendientes: 350
        }
    ),         
]

export { pointOfSalesStub }