function renderProgressBar (selector, data) {

    // GENERUOJAME TURINI
    let HTML = '';                           
    for (let i = 0; i < data.length; i++) {
        const bar = data[i];
        HTML +=   `<div class="progress-bar">
        <div class="top">
           <div class="label">${bar.title}</div>
            <div class="value">${bar.value}%</div>
           </div>
       <div class="bottom">
               <div class="progress" style="width: ${bar.value}%;">
                <div class="bar"></div>
                   </div>   
                   </div>
               </div>`;
    }

    console.log(HTML);

    //RANDAME VIETA KUR REIKES PADEETI TURINI
    const DOM = document.querySelector(selector);
    
    
DOM.innerHTML += HTML;
}

export { renderProgressBar }