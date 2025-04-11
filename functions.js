
let pages = ["Início","Receitas", "Alcoólicas", "Não Alcoólicas"]
let pag = ["index.html", "recipesA.html", "recipesN.html"]

function Header(){
    let c = document.createElement("div")
    let inf = "div"
    c.id = inf + "Header"
    c.className = inf + "Header"
    document.body.appendChild(c)
    for(let I=0; I < 3;I++){
        let d = document.createElement("div")
        d.id = inf + I
        d.className = inf + I
        c.appendChild(d)
    }
    let div1 = inf + "0"
    let div2 = inf + "1"
    let div3 = inf + "2"
    let d1 = document.getElementById(div1)
    let d2 = document.getElementById(div2)
    let d3 = document.getElementById(div3)
    let a1 = document.createElement("a");
    a1.href = pag[0];
    a1.className = "aH0";
    d1.appendChild(a1)
    let img = document.createElement("img")
    img.src = "/img/logo.png"
    img.className = "logo"
    a1.appendChild(img)

    let a = document.createElement("a")
    a.id = "aH"
    a.href = pag[0]
    d2.appendChild(a)
    let button = document.createElement("button")
    button.className = "btnH"
    button.id = "btnH" + 0
    button.innerText = pages[0]
    a.appendChild(button)
    let button2 = document.createElement("button")
    button2.className = "btnH"
    button2.id = "btnH" + 1
    button2.innerText = pages[1]
    d2.appendChild(button2)

    let btnH1 = document.getElementById("btnH1");
    let control = 0;

    btnH1.addEventListener("mouseenter", () => {
        if (control === 0) {
            control = 1;

            // Criar div do submenu
            let div = document.createElement("div");
            div.className = "divHR";
            div.id = "divHR";
            document.getElementById("div1").appendChild(div);

            // Criar os links e botões
            for (let I = 0; I < 2; I++) {
                let a = document.createElement("a");
                a.href = pag[I + 1];
                a.className = "aH2";

                let button = document.createElement("button");
                button.className = "btnH2";
                button.id = "btnHD" + I;
                button.innerText = pages[I + 2];

                a.appendChild(button);
                div.appendChild(a);
            }


            // Quando o mouse sair da divHR, remove e volta a cor
            div.addEventListener("mouseleave", () => {
                div.remove();
                control = 0;
            });

            // Quando o mouse sair do botão, verifica se saiu da div também
            btnH1.addEventListener("mouseleave", () => {
                setTimeout(() => {
                    if (!div.matches(":hover")) {
                        div.remove();
                        control = 0;
                    }
                }, 200);
            });
        }
    });

    d3.innerHTML = `<a href="https://facebook.com" target="_blank" class="userIcon"><i class="fa-brands fa-facebook userIcon"></i></a>`
}

let recipe0 = [false, "Shot de Gengibre e Limão", "Este shot é perfeito para quem quer começar o dia com mais energia e dar aquele empurrão na imunidade. Combinando o poder anti-inflamatório do gengibre com a acidez refrescante do limão, ele ajuda a desintoxicar o organismo, acelerar o metabolismo e melhorar a digestão. Além disso, é super fácil e rápido de preparar — ideal para incluir na sua rotina matinal.", "Ingredientes:1 pedaço pequeno de gengibre (cerca de 2 cm);Suco de 1 limão;1 colher de chá de cúrcuma em pó (ou raiz fresca ralada);1 pitada de pimenta-do-reino (ajuda a ativar a cúrcuma);50 ml de água;Modo de preparo:Bata tudo no liquidificador e coe se quiser.", "img/2.jpg"]
let recipe1 = [false, "Shot de Gengibre e Limão", "O Shot Verde Revitalizante é um verdadeiro aliado para quem busca mais disposição no dia a dia. Rico em clorofila, vitaminas e minerais, ele atua no combate aos radicais livres, fortalece o sistema imunológico e ajuda na eliminação de toxinas. Seu sabor marcante e refrescante é perfeito para quem quer começar o dia com leveza e vitalidade.", "Ingredientes:Suco de 1 limão;1 colher de chá de clorofila líquida (ou folhas de couve);1 colher de chá de spirulina (opcional);50 ml de água de coco;Modo de preparo:Misture bem e tome gelado.", "img/3.jpg"]
let recipe2 = [false, "Suco de Abacaxi com Cúrcuma", "Refrescante, funcional e cheio de benefícios, o Suco de Abacaxi com Cúrcuma é uma excelente escolha para quem quer cuidar da saúde sem abrir mão do sabor. A combinação do abacaxi — rico em bromelina e vitamina C — com o poder anti-inflamatório da cúrcuma ajuda a desintoxicar o organismo, fortalecer a imunidade e combater o inchaço. Uma bebida leve e poderosa para qualquer hora do dia.", "Ingredientes:2 fatias de abacaxi;1 colher de chá de cúrcuma em pó;1 fatia de gengibre fresco;200 ml de água ou água de coco;Modo de preparo:Bata tudo no liquidificador. Coe se preferir e sirva com gelo.", "img/4.jpg"]
let recipe3 = [false, "Suco Verde", "O queridinho das rotinas saudáveis, o Suco Verde é uma combinação poderosa de ingredientes naturais que promovem um verdadeiro 'reset' no organismo. Rico em fibras, antioxidantes e clorofila, ele auxilia na desintoxicação do corpo, melhora a digestão, fortalece a imunidade e ainda dá aquela sensação de leveza logo nas primeiras horas do dia.", "Ingredientes:1 folha de couve;1 maçã verde;1 pedaço pequeno de gengibre;Suco de 1 limão;200 ml de água;Modo de preparo:Bata tudo em um liquidificador ou difusor e sirva", "img/5.jpg"]
let recipe4 = [false, "Drink Refrescante de Hortelã e Pepino", "Leve, hidratante e cheio de frescor, o Drink Refrescante de Hortelã e Pepino é perfeito para os dias quentes ou como acompanhamento de uma alimentação equilibrada. O pepino é rico em água e minerais, ajudando na hidratação e na eliminação de toxinas, enquanto a hortelã traz aquele toque aromático e digestivo que transforma qualquer gole em uma pausa revigorante.", "Ingredientes:1/2 pepino fatiado;Folhas de hortelã frescas;Suco de 1 limão;Água com gás ou água filtrada;Gelo;Modo de preparo:Macere levemente o pepino e a hortelã, adicione os demais ingredientes e sirva gelado.", "img/6.jpg"]
let recipe5 = [false, "Chá gelado de hibisco com manjericão", "Colorido, aromático e cheio de benefícios, o Chá Gelado de Hibisco com Manjericão é a escolha perfeita para quem quer refrescância com um toque de sofisticação. O hibisco é conhecido por suas propriedades diuréticas e antioxidantes, enquanto o manjericão traz um sabor herbal surpreendente, com efeito calmante e digestivo. Um drink natural que equilibra saúde e sabor em cada gole.", "Ingredientes:1 colher de sopa de hibisco seco;1 colher de sopa de folhas de manjericão fresco;500 ml de água quente;Mel ou agave (a gosto);Gelo;Modo de preparo:Infusione o hibisco e o manjericão na água quente por 10 minutos. Coe, adoce e leve à geladeira.", "img/7.jpg"]
let recipe6 = [true, "Gin com Alecrim e Limão Siciliano", "Refinado, aromático e extremamente refrescante, o Gin com Alecrim e Limão Siciliano é a escolha ideal para quem busca um drink leve com toque sofisticado. O limão siciliano traz uma acidez suave e perfumada, enquanto o alecrim adiciona um aroma herbal marcante que combina perfeitamente com a base do gin. Um clássico moderno, perfeito para fins de tarde e encontros especiais.", "Ingredientes:50 ml de gin;Suco de 1/2 limão siciliano;1 ramo de alecrim fresco;Água tônica;Gelo;Modo de preparo:Em um copo com gelo, adicione o gin, o suco de limão e o alecrim levemente amassado.Complete com água tônica e misture.", "img/8.jpg"]
let recipe7 = [true, "Caipirinha de Maracujá com Hortelã", "Uma variação tropical e surpreendente da clássica caipirinha! A Caipirinha de Maracujá com Hortelã combina o sabor marcante e levemente ácido do maracujá com a refrescância irresistível da hortelã. O resultado é um drink equilibrado, perfumado e perfeito para dias quentes ou encontros descontraídos. Uma explosão de sabor brasileiro em cada gole.", "Ingredientes:1 maracujá (polpa);1 colher de sopa de açúcar demerara ou mel;1 dose de cachaça (50 ml);Hortelã a gosto;Gelo;Modo de preparo:Amasse o maracujá com o açúcar e a hortelã, adicione a cachaça e o gelo. Misture bem", "img/9.jpg"]
let recipe8 = [true, "Mojito de Chá Verde", "Uma releitura moderna e funcional do tradicional mojito, o Mojito de Chá Verde é ideal para quem busca refrescância com um toque saudável. A suavidade do chá verde se une à hortelã, ao limão e à leveza da água com gás, criando um drink equilibrado, aromático e perfeito para relaxar sem exageros. Uma escolha inteligente e cheia de sabor para os dias quentes ou momentos de descontração.", "Ingredientes:1 dose de rum branco;1/2 limão em pedaços;Hortelã fresca;1/2 xícara de chá verde gelado;1 colher de sopa de mel;Gelo;Modo de preparo:Macere o limão com hortelã e mel. Adicione gelo, rum e chá verde. Misture e sirva.", "img/10.jpg"]
let recipe9 = [true, "Spritz de Laranja com Camomila", "Delicado, leve e surpreendente, o Spritz de Laranja com Camomila é um drink que une o cítrico suave da laranja ao aroma calmante da camomila, criando uma experiência sensorial única. Ideal para momentos de relaxamento, brunchs ou encontros ao entardecer, ele traz o equilíbrio perfeito entre sabor, frescor e sofisticação.", "Ingredientes:60 ml de Aperol;100 ml de espumante seco;30 ml de chá de camomila gelado;Rodelas de laranja;Gelo;Modo de preparo:Em uma taça, coloque gelo, o Aperol, espumante e chá de camomila. Finalize com rodelas de laranja", "img/11.jpg"]
let recipe10 = [true, "Vodka com Suco de Melancia e Manjericão", "Refrescante, leve e com um toque inusitado, o drink de Vodka com Suco de Melancia e Manjericão é perfeito para dias quentes ou eventos ao ar livre. A melancia, com sua doçura natural e alto teor de água, combina perfeitamente com a intensidade suave da vodka e o aroma herbal do manjericão. Um drink vibrante, colorido e fácil de agradar!", "Ingredientes:50 ml de vodka;150 ml de suco de melancia fresco;Folhas de manjericão;Gelo;Modo de preparo:Misture tudo em uma coqueteleira com gelo. Sirva em copo longo, decorado com manjericão.", "img/1.jpg"]





//0 true or false; 1 titulo; 2 texto; 3 receita; 4 img

let arrayofarrays = [recipe0,recipe1,recipe2,recipe3,recipe4,recipe5,recipe6,recipe7,recipe8,recipe9,recipe10] 
function recipes(trueorfalse){
    let control = 0
    let ativar = true
    let divcontainerAll = document.createElement("div")
    divcontainerAll.className = "divcontainerAll"
    divcontainerAll.id = "divcontainerAll"
    document.body.appendChild(divcontainerAll)
    arrayofarrays.forEach((element, index) => {
        if(arrayofarrays[index][0] === trueorfalse){
            control++
        }
    })
    for(let i = 0; i < arrayofarrays.length; i++){
        if(arrayofarrays[i][0] === trueorfalse){
            let divcontainer = document.createElement("div")
            divcontainer.className = "divcontainerRecipes"
            divcontainer.id = "divcontainerRecipes"+i
            divcontainerAll.appendChild(divcontainer)
            let divsubcontainer1 = document.createElement("div")
            divsubcontainer1.className = "divsubcontainer1Recipes"
            divsubcontainer1.id = "divsubcontainer1Recipes"+i
            divcontainer.appendChild(divsubcontainer1)
            let divsubsubcontainer1 = document.createElement("div")
            divsubsubcontainer1.className = "divsubsubcontainer1Recipes"
            divsubsubcontainer1.id = "divsubsubcontainer1Recipes"+i
            divsubcontainer1.appendChild(divsubsubcontainer1)
            let divsubsubcontainer2 = document.createElement("div")
            divsubsubcontainer2.className = "divsubsubcontainer1Recipes"
            divsubsubcontainer2.id = "divsubsubcontainer2Recipes"+i
            divsubcontainer1.appendChild(divsubsubcontainer2)
            let alvo = document.getElementById("divsubsubcontainer1Recipes"+i)
            let alvoimg = document.getElementById("divsubsubcontainer2Recipes"+i)
            for(let I = 0; I < arrayofarrays[i].length; I++){
                if (I !== 0 && I !== 3){
                    let text = arrayofarrays[i][I] 
                    let element = "p"
                    if(ativar){
                        alvo = document.getElementById("divsubsubcontainer2Recipes"+i)
                        alvoimg = document.getElementById("divsubsubcontainer1Recipes"+i)
                    }
                    if(I === 1){
                        element = "h2"
                    }
                    if(I === 4){
                        element = "img"
                        let css = "recipes" + element 
                        let createElement = document.createElement(element)
                        createElement.className = css
                        createElement.id = "recipes" + element + i + I
                        createElement.src = text
                        alvoimg.appendChild(createElement)
                    }else{
                        let css = "recipes" + element 
                        let createElement = document.createElement(element)
                        createElement.className = css
                        createElement.id = "recipes" + element + i + I
                        createElement.innerText = text
                        alvo.appendChild(createElement)
                    }
                }
            }
            let btn = document.createElement("button")
            btn.className = "btnRecipes"
            btn.id = "btnrecipes" + i
            btn.innerText = "Veja a Receita"
            alvo.appendChild(btn)
            ativar = !ativar
            document.getElementById("btnrecipes" + i).addEventListener("click", () => {
                let palavras = ["Ingredientes", "Modo de preparo"];
                let text = arrayofarrays[i][3].replace(palavras[0], "<b>"+palavras[0]+"</b>")
                text = text.replace(palavras[1], "<b>"+palavras[1]+"</b>")
                text = text.replace(/[:;]/g, "<br>");
                let id = "recipesp"+i+"2" 
                let ele = document.getElementById(id)
                ele.innerHTML = text
            })
        }
        
    }
}

let cont1 = ["The Caba", `Descubra os sabores naturais do The Caba! Se você ama bebidas cheias de sabor, frescor e ingredientes naturais, o The Caba é o seu novo destino favorito. Nosso site é especializado em receitas de bebidas que valorizam o melhor da natureza — com combinações criativas, refrescantes e fáceis de preparar.
Venha conhecer, experimentar e se apaixonar pelas nossas receitas! Seu momento de sabor começa aqui.`, "img/banner.jpg"]
let cont3 = ["Bebidas com Álcool", `Sofisticadas ou descomplicadas, nossas receitas alcoólicas trazem o melhor das ervas, frutas e especiarias. Perfeitas para encontros, celebrações ou simplesmente relaxar com estilo.`, "img/1.jpg"]
let cont2 = ["The Caba: o sabor natural que combina com você", `Descubra o prazer de preparar bebidas com ingredientes frescos e naturais. No The Caba, cada receita é feita para valorizar o sabor real de cada ingrediente. Escolha o que combina mais com o seu momento
`, "img/b.jpg"]
let cont4 = ["Bebidas sem Álcool", `Saborosas, nutritivas e refrescantes. Nossas receitas sem álcool são ideais para todos os públicos — inclusive crianças — e mostram que é possível brindar com leveza e criatividade.`, "img/3.jpg"]
let principal = [cont1,cont2,cont3,cont4]

function prin(){
    let ativar = true
    let divcontainerAll = document.createElement("div")
    divcontainerAll.className = "divcontainerAll"
    divcontainerAll.id = "divcontainerAll"
    document.body.appendChild(divcontainerAll)
    for(let i = 0; i < principal.length; i++){
            let divcontainer = document.createElement("div")
            divcontainer.className = "divcontainerRecipes"
            divcontainer.id = "divcontainerRecipes"+i
            divcontainerAll.appendChild(divcontainer)
            let divsubcontainer1 = document.createElement("div")
            divsubcontainer1.className = "divsubcontainer1Recipes"
            divsubcontainer1.id = "divsubcontainer1Recipes"+i
            divcontainer.appendChild(divsubcontainer1)
            let divsubsubcontainer1 = document.createElement("div")
            divsubsubcontainer1.className = "divsubsubcontainer1Recipes"
            divsubsubcontainer1.id = "divsubsubcontainer1Recipes"+i
            divsubcontainer1.appendChild(divsubsubcontainer1)
            let divsubsubcontainer2 = document.createElement("div")
            divsubsubcontainer2.className = "divsubsubcontainer1Recipes"
            divsubsubcontainer2.id = "divsubsubcontainer2Recipes"+i
            divsubcontainer1.appendChild(divsubsubcontainer2)
            let alvo = document.getElementById("divsubsubcontainer1Recipes"+i)
            let alvoimg = document.getElementById("divsubsubcontainer2Recipes"+i)
            for(let I = 0; I < principal[i].length; I++){
                    let text = principal[i][I] 
                    let element = "p"
                    if(ativar){
                        alvo = document.getElementById("divsubsubcontainer2Recipes"+i)
                        alvoimg = document.getElementById("divsubsubcontainer1Recipes"+i)
                    }
                    if(I === 0){
                        element = "h2"
                    }
                    if(I === 2){
                        element = "img"
                        let css = "recipes" + element 
                        let createElement = document.createElement(element)
                        createElement.className = css
                        createElement.id = "recipes" + element + i + I
                        createElement.src = text
                        alvoimg.appendChild(createElement)
                    }else{
                        let css = "recipes" + element 
                        let createElement = document.createElement(element)
                        createElement.className = css
                        createElement.id = "recipes" + element + i + I
                        createElement.innerText = text
                        alvo.appendChild(createElement)
                    }
        
            }
            ativar = !ativar
    }
        
}







export{Header, recipes, prin}