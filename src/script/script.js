function createCalcFunction(){

    function createCalc(){
        return{
            // propriedade
            display: document.querySelector('.display'),
            //metodos

            startButton(){
                this.settingsButtons()
                this.settingsEnter()
            },

            settingsEnter(){
                document.addEventListener('keyup', (ev)=>{
                    if(ev.keyCode === 13){
                        this.createJoin(this.display.value)
                    }
                })
            },

            settingsButtons(){

                document.addEventListener('click', (ev)=>{
                    const el = ev.target;

                    if(el.classList.contains('btn-num')){
                        this.createAdd(el.innerText)
                    }

                    if(el.classList.contains('btn-clear')){
                        this.createClear()
                    }

                    if(el.classList.contains('btn-del')){
                        this.createDel()
                    }

                    if(el.classList.contains('btn-eq')){
                        this.createJoin(this.display.value)
                    }
                })
            },

            createAdd(elementNum){
                this.display.value += elementNum;
            },

            createClear(){
                this.display.value = '';
            },

            createDel(){
                this.display.value = this.display.value.slice(0, -1);
            },

            createJoin(inputValue){
                try{
                    let conta = inputValue;
                
                    if(!conta){
                        alert('Esse Valor é invalido!')
                        return
                    }
                    this.display.value = eval(conta);
                }catch{
                    alert('Esse Valor é invalido!')
                    return
                }
            }

        }

    }

    const calculadora = createCalc();
    calculadora.startButton();
}

createCalcFunction()