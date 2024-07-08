function calculateBill() {
    const units = parseFloat(document.getElementById('units').value);
    const load = parseFloat(document.getElementById('load').value);
    const FC = load * 15; // can be changed based on yout electricity provider
    let resultMessage ="";

    if (units >= 0) {
        if (units <= 25) {
            const A = units * 5.18;// this is the first slab cost can be modified based on your provider
            const amt1 = A + FC + 10;
            resultMessage = `Your Bill For ${units} is: ${Math.round(amt1)}`;
        }
        else if (units < 61 && units ) {
            const B = ((units - 25) * 5.69) + 129.5;// 5.69 is the second slab cost can be modified based on your provider
            const amt2 = B + FC + 10;
            resultMessage = `Your Bill For ${units} is: ${Math.round(amt2)}`;
        }
        else if (units < 100) {
        const C = (units - 60) * 6.70 + 328.65;// 6.78 is the third slab cost can be modified based on your provider
        const amt3 = C + FC + 10;
        resultMessage = `Your Bill For ${units} is: ${Math.round(amt3)}`;
        } 
        else if (units < 151) {
        const D = (units - 100) * 7.45 + 596.65;// 7.45 is the third slab cost can be modified based on your provider
        const amt4 = D + FC + 10;
        resultMessage = `Your Bill For ${units} is: ${Math.round(amt4)}`;
        } 
        else if (units < 201) {
            const E = (units - 150) * 7.62 + 969.15;// 7.62 is the third slab cost can be modified based on your provider
            const amt5 = E + FC + 10;
            resultMessage = `Your Bill For ${units} is: ${Math.round(amt5)}`;
        }
        else if (units < 301) {
            const F = (units - 200) * 7.62 + 1350.15;// 7.62 is the fourth slab cost can be modified based on your provider
            const amt6 = F + FC + 10;
            resultMessage = `Your Bill For ${units} is: ${Math.round(amt6)}`;
        }
        else {
            const G = (units - 300) * 9.21 + 2112.15;// 9.21 is the fifth slab cost can be modified based on your provider
            const GD7 = (G + FC) * 10 / 100;
            const amt7 = G + FC + GD7 + 10;
            resultMessage = `Your Bill For ${units} is: ${Math.round(amt7)}`;
        }

    }else {
        resultMessage = "Invalid Input (Units need to be positive";
    }
    
    resultMessage += "<br>**REBATE AND ADJUSTMENTS ARE NOT CALCULATED AND VALUES ARE ROUNDED UP**";
    
    document.getElementById('result').innerHTML = resultMessage;
}