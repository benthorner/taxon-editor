const options = {
  "Taxitor.ForceLayout.simulationTicks": 1000,
  "Taxitor.ForceLayout.collisionRadius": 100,
  "Taxitor.ZoomHandler.maxScaleFactor": 2,
  "Taxitor.ZoomHandler.transformDelay": 500,
  "Taxitor.TreeLayout.xSeparation": 110,
  "Taxitor.TreeLayout.ySeparation": 200,
  "Taxitor.RadialLayout.xSeparation": 110,
  "Taxitor.RadialLayout.ySeparation": 110,
  "Taxitor.WrapLayout.xSeparation": 110,
  "Taxitor.WrapLayout.ySeparation": 110,
  "Taxitor.DefaultSchema.nodeHeight": 100,
  "Taxitor.DefaultSchema.nodeWidth": 100,
  "Taxodes.GOVUKTaxode.baseURL": "https://www.gov.uk",
  "Taxdocs.GOVUKTaxdoc.baseURL": "https://www.gov.uk"
}

export class Config {
  static get(key) {
    return options[key]
  }
}
