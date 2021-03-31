
/*  
$("#method1").toggle(b1);
$("#method2").toggle(b2);
$("#method3").toggle(b3);
$("#method4").toggle(b4);

 
 
$('#method1').css('display','none');
$('#method2').css('display','none');
$('#method3').css('display','none');
$('#method4').css('display','none');

 /* 
$("input[name='card']").on("click", function(){
        $(".template").toggle(this.value === "false" && this.checked);
        $('.p').toggle(this.value === "true" && this.checked);
    }); 


var b1,b2,b3,b4=true;

$("#m1").on("click", function(){
    $("#method2").toggle(false);
    $("#method3").toggle(false);
    $("#method4").toggle(false);
    window.location.href="#method1";
    $("#method1").toggle(b1);
    b1=!b1;
   
    
}); 
$("#m2").on("click", function(){
  $('#payment-img').toggle(false);
  $("#method1").toggle(false);
  $("#method3").toggle(false);
  $("#method4").toggle(false);
  window.location.href="#method2";
  $("#method2").toggle(b2);
  b2=!b2;
    
}); 
$("#m3").on("click", function(){
  $('#payment-img').toggle(false);
  $("#method1").toggle(false);
  $("#method2").toggle(false);
  $("#method4").toggle(false);
  window.location.href="#method3";
  $("#method3").toggle(b3);
  b3=!b3;
    
}); 
$("#m4").on("click", function(){
  $('#payment-img').toggle(false);
  $("#method1").toggle(false);
  $("#method2").toggle(false);
  $("#method3").toggle(false);
  window.location.href="#method4";
  $("#method4").toggle(b4);
  b4=!b4;
}); 
*/
/* method 1 */
function initPayPalButton() {
    paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'paypal',
        
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"EUR","value":50}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container');
  }
  initPayPalButton();

/* method 2 */

function initPayPalButton2() {
    paypal.Buttons({
        style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'paypal',

        },

        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units: [{ "amount": { "currency_code": "EUR", "value": 30 } }]
            });
        },

        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                alert('Transaction completed by ' + details.payer.name.given_name + '!');
            });
        },

        onError: function (err) {
            console.log(err);
        }
    }).render('#paypal-button-container2');
}
initPayPalButton2();

/* method 3 */
function initPayPalButton3() {
    paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'paypal',
        
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"EUR","value":35}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container3');
  }
  initPayPalButton3();



/* method 4 */
 
function initPayPalButton4() {
    paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'paypal',
        
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"EUR","value":20}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container4');
  }
  initPayPalButton4();
