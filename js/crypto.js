$(document).ready(function () {
  var getPrice = (httprespons, inid) => {
    var id = parseInt(inid)
    price = httprespons['data'][id]['quote']['USD']['price']
    return price.toFixed(1)
  }

  var getPercentage = (httprespons, inid) => {
    var id = parseInt(inid)
    price = httprespons['data'][id]['quote']['USD']['percent_change_24h']
    return price.toFixed(2)
  }
  var successFunction = function (response) {
    ripprice
    $('#btcprice').html('USD: ' + getPrice(response, 0))
    $('#liteprice').html('USD: ' + getPrice(response, 13))
    $('#ethprice').html('USD: ' + getPrice(response, 1))
    $('#bchprice').html('USD: ' + getPrice(response, 11))
    $('#ripprice').html('USD: ' + getPrice(response, 6))

    $('#btcperc').html(getPercentage(response, 0) + '%')
    $('#liteperc').html(getPercentage(response, 13) + '%')
    $('#ethperc').html(getPercentage(response, 1) + '%')
    $('#bchperc').html(getPercentage(response, 11) + '%')
    $('#ripperc').html(getPercentage(response, 6) + '%')

    console.log(response['data'])
  }

  $.ajax({
    url: './crypto.php',
    dataType: 'json',
    method: 'GET',
    cache: false,
    success: successFunction,
  })

  // $.ajax({
  //   url: './crypto.php',
  //   dataType: 'json',
  //   method: 'GET',
  //   success: function (httprespons)

  //   {
  //     var btcprice = this.getPrice(httprespons,0), btcpercent
  //     // btcprice = httprespons['data'][1]['quote']['USD']['price']
  //     // btcpercent = httprespons['data'][0]['quote']['USD']['percent_change_1h']
  //     // $('#btcprice').html('USD: ' + btcprice.toFixed(1))
  //     // $('#btcperc').html(btcpercent.toFixed(2) + '%')
  //     console.log(btcprice)
  //   },

  // })
})
