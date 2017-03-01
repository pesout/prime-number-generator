function vypis(x)
{
    if (x!=0)
    {
      document.getElementById("vystup").innerHTML = x; //if is a prime number, than display
    }
}


function prvo(x)
{

  y = x.toString().charAt((x.toString()).length-1);

  if (y==0 || y==2 || y==4 || y==5 || y==6 || y==8)
  {
    vypis(0);
  }
  else {
    odmo = Math.sqrt(x);
    test = 3;
    delit = 1;

    while (test<=odmo && delit!=0) //dividing while is tested number less then the square root
    {
      delit = x % test;
      test = test + 2;
    }

    if(delit==0)
    {
      vypis(0);
    }
    else
    {
      vypis(x);
    }
  }
}


x = 2;
start = false;


function stst() //a start-stop button
{
	if (start) 
		{
			clearInterval(a);
			start = false;
			document.getElementById("button").innerHTML = "START";
		} 
	else 
		{	
			a = window.setInterval("prvo(x); x++;", 1);
			start = true;
			document.getElementById("button").innerHTML = "STOP";
		}
	
}
