const Receitas_Coqueteis = [
    {
      "name": "Margarita",
      "image": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      "ingredients": [
        "1 1/2 oz Tequila",
        "1/2 oz Triple sec",
        "1 oz Suco de limão",
        "Sal (para decorar)"
      ],
      "instructions": [
        "Molhe a borda do copo com uma fatia de limão e mergulhe no sal.",
        "Misture o tequila, triple sec e suco de limão com gelo.",
        "Coe para o copo preparado."
      ]
    },
    {
      "name": "Mojito",
      "image": "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
      "ingredients": [
        "1 1/2 oz Rum branco",
        "6 folhas de hortelã",
        "1 oz Suco de limão",
        "2 colheres de chá de açúcar",
        "Água com gás"
      ],
      "instructions": [
        "Macere as folhas de hortelã com o açúcar e suco de limão.",
        "Adicione o rum e gelo.",
        "Complete com água com gás e decore com hortelã."
      ]
    },
    {
      "name": "Piña Colada",
      "image": "https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg",
      "ingredients": [
        "3 oz Rum claro",
        "3 colheres de sopa de leite de coco",
        "3 colheres de sopa de suco de abacaxi"
      ],
      "instructions": [
        "Misture todos os ingredientes com gelo no liquidificador.",
        "Despeje em um copo alto.",
        "Decore com fatia de abacaxi e cereja."
      ]
    },
    {
      "name": "Daiquiri",
      "image": "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
      "ingredients": [
        "1 1/2 oz Rum branco",
        "3/4 oz Suco de limão",
        "1 colher de chá de açúcar"
      ],
      "instructions": [
        "Misture o rum, suco de limão e açúcar com gelo.",
        "Coe para um copo de coquetel e sirva."
      ]
    },
    {
      "name": "Cosmopolitan",
      "image": "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
      "ingredients": [
        "1 1/4 oz Vodka",
        "1/4 oz Triple sec",
        "1/4 oz Suco de limão",
        "1/4 oz Suco de cranberry"
      ],
      "instructions": [
        "Misture todos os ingredientes com gelo.",
        "Coe para um copo de martini.",
        "Decore com uma casca de limão."
      ]
    },
    {
      "name": "Mai Tai",
      "image": "https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg",
      "ingredients": [
        "1 oz Rum branco",
        "1/2 oz Rum escuro",
        "1/2 oz Triple sec",
        "1/4 oz Xarope de amêndoa",
        "Suco de limão"
      ],
      "instructions": [
        "Misture todos os ingredientes com gelo.",
        "Coe para um copo com gelo.",
        "Decore com cereja e fatia de abacaxi."
      ]
    },
    {
      "name": "Old Fashioned",
      "image": "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
      "ingredients": [
        "1 1/2 oz Bourbon",
        "2 dashes Angostura bitters",
        "1 cubo de açúcar",
        "Um toque de água"
      ],
      "instructions": [
        "Coloque o açúcar e bitters no copo.",
        "Adicione um pouco de água e misture.",
        "Adicione o bourbon e gelo."
      ]
    },
    {
      "name": "Whiskey Sour",
      "image": "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
      "ingredients": [
        "2 oz Whiskey",
        "3/4 oz Suco de limão",
        "1/2 oz Xarope de açúcar"
      ],
      "instructions": [
        "Misture o whiskey, suco de limão e xarope de açúcar com gelo.",
        "Coe para um copo com gelo.",
        "Decore com uma cereja."
      ]
    },
    {
      "name": "Negroni",
      "image": "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
      "ingredients": [
        "1 oz Gin",
        "1 oz Campari",
        "1 oz Vermute doce"
      ],
      "instructions": [
        "Misture o gin, Campari e vermute com gelo.",
        "Coe para um copo com gelo.",
        "Decore com uma casca de laranja."
      ]
    },
    {
      "name": "Manhattan",
      "image": "https://www.thecocktaildb.com/images/media/drink/yk70e31606771240.jpg",
      "ingredients": [
        "2 oz Bourbon",
        "1 oz Vermute doce",
        "2 dashes Angostura bitters"
      ],
      "instructions": [
        "Misture todos os ingredientes com gelo.",
        "Coe para um copo de martini.",
        "Decore com uma cereja."
      ]
    }
  ]

  
  function Coqueteis(){

    const Lista_Coqueteis = document.getElementById('Lista_Coqueteis')

    for(let x = 0; x < Receitas_Coqueteis.length; x++){

        const Titulo = document.createElement('h1')
        Titulo.textContent = 'Nome do Coquetel: '+Receitas_Coqueteis[x].name

        const Imagem = document.createElement('img')
        Imagem.src = Receitas_Coqueteis[x].image
        Imagem.alt = 'Imagem do Coquetel'

        const Ingredientes = document.createElement('p')
        Ingredientes.textContent = 'Ingredientes: '+Receitas_Coqueteis[x].ingredients

        const Instruções = document.createElement('p')
        Instruções.textContent = 'Instruções: '+Receitas_Coqueteis[x].instructions

        Lista_Coqueteis.appendChild(Titulo)
        Lista_Coqueteis.appendChild(Imagem)
        Lista_Coqueteis.appendChild(Ingredientes)
        Lista_Coqueteis.appendChild(Instruções)

    }

  }
  Coqueteis()