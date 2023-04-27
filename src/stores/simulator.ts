import { defineStore } from 'pinia';

export const useMoneyInputStore = defineStore('simulator', {
    state: () => {
        return {
            valueInput: "",
            valueTasa: "3,0%",
            valueAval: "8,33%"
        }
    },
    actions: {
        recived(monto) {
            this.valueInput = monto;
        },
        recivedTasa(tasa) {
            this.valueTasa = tasa;
        },
        recivedAval(aval) {
            this.valueAval = aval;
        }
    }
});