var apiResponse = {
	status: 'success',
	data: {
	  code: 'BRENT_CRUDE_USD',
	  created_at: '2024-02-04T15:15:03.554Z',
	  currency: 'USD',
	  formatted: '$77.67',
	  price: 76.67,
	  type: 'spot_price'
	}
  };
  
  var brentElement = document.getElementById('brent');
  
  brentElement.innerText = 'Güncel fiyat: ' + apiResponse.data.price +'$';




