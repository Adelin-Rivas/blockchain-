var app = new Vue({ 
    el: '#app',
    
    data: {
       
        //list of iteam 
        valueEth:0,
        valueDash:0,
        // initial value of en
        valueDashUS:0,
        valueDashEUR:0,
        valueDashBTC:0,
        //

        valueEthUS:0,
        valueDashEthEUR:0,
        valueEthBTC:0,


        
    },
    mounted () {
        
        var vw=this
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=INSERT-YOUR-API-2af5c58929d44f87ca5754c9e03a1a9ad6faed1759072f84438486b0a038a09f')
          .then(response => {
              
            vw.valueEth= response.data.ETH
            vw.valueDash=response.data.DASH


            vw.valueDashBTC= response.data.DASH.BTC
            vw.valueDashEUR= response.data.DASH.EUR
            vw.valueDashUS= response.data.DASH.USD
            
            vw.valueEthBTC= response.data.ETH.BTC
            vw.valueEthEUR= response.data.ETH.EUR
            vw.valueEthUS= response.data.ETH.USD


        
        })
          
      },

      methods:
      { 
        dash:function(event)
       {
           var value_from_user=event.target.value+0;
           if(value_from_user<=1)
              {value_from_user=1}
           
           this.valueDashUS=this.valueDash.USD*value_from_user;
           this.valueDashEUR=this.valueDash.EUR*value_from_user;
           this.valueDashBTC=this.valueDash.BTC*value_from_user;
          

       },


       Eth:function(event)
       {
        var value_from_user=event.target.value+0;
        if(value_from_user<=1)
           {value_from_user=1}

        this.valueEthUS=this.valueEth.USD*event.target.value;
        this.valueEthEUR=this.valueEth.EUR*event.target.value;
        this.valueEthBTC=this.valueEth.BTC*event.target.value;
            

       },


      
      
       listArray:function()
        {
            this.value= map.key(this.message)

        },




      }
     
    
});