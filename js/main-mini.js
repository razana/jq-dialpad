$(function(){var d=$(".dials ol li"),b,a=$(".number"),c;d.click(function(){b=d.index(this);9==b?a.append("*"):10==b?a.append("0"):11==b?a.append("#"):12==b?a.empty():13==b?(c=a.text(),c=c.slice(0,-1),a.empty().append(c)):14!=b&&a.append(b+1)});$(document).keydown(function(b){switch(b.which){case 96:a.append("0");break;case 97:a.append("1");break;case 98:a.append("2");break;case 99:a.append("3");break;case 100:a.append("4");break;case 101:a.append("5");break;case 102:a.append("6");break;case 103:a.append("7"); break;case 104:a.append("8");break;case 105:a.append("9");break;case 8:c=a.text();c=c.slice(0,-1);a.empty().append(c);break;case 27:a.empty();break;case 106:a.append("*");break;case 35:a.append("#");break;case 13:$(".pad-action").click();break;default:return}b.preventDefault()})});