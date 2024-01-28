execFibonnacci = function(function_name, result_id){

    const fibonnacci_input = document.getElementById("fibonnacci_input").value;
    const fibonnacci_call_count = document.getElementById("fibonnacci_call_count").value;

    let fibonnacci_result = -1;
    const start_time = performance.now();
    for(i=0; i<fibonnacci_call_count; i++)
    {
        fibonnacci_result = window[function_name](fibonnacci_input);
    }
    const end_time = performance.now();
    const exec_time = end_time-start_time;
    
    document.getElementById(result_id).innerHTML = 'fibonnacci_input: '+fibonnacci_input
                                                    +'</br>fibonnacci_call_count: '+fibonnacci_call_count
                                                    +'</br>fibonnacci_result: '+fibonnacci_result
                                                    +'</br>exec_time: '+exec_time+'ms';
}

onFibonnacciJs = function()
{
    document.getElementById("fibonnacci_btn_js").disabled = true;
    document.getElementById("fibonnacci_btn_js").textContent = "Run JS fibonnacci (running)";
    document.getElementById("js_fibonnacci_result").innerHTML = "running";

    setTimeout(function() { 
        execFibonnacci('fibonnacci_js', 'js_fibonnacci_result');
        document.getElementById("fibonnacci_btn_js").disabled = false;
        document.getElementById("fibonnacci_btn_js").textContent = "Run JS fibonnacci";
    }, 1);
}

onFibonnacciWasm = function()
{
    document.getElementById("fibonnacci_btn_wasm").disabled = true;
    document.getElementById("fibonnacci_btn_wasm").textContent = "Run WASM fibonnacci (running)";
    document.getElementById("wasm_fibonnacci_result").innerHTML = "running";
    setTimeout(function() { 
        execFibonnacci('fibonnacci_wasm', 'wasm_fibonnacci_result');
        document.getElementById("fibonnacci_btn_wasm").disabled = false;
        document.getElementById("fibonnacci_btn_wasm").textContent = "Run WASM fibonnacci";
    }, 1);
}
