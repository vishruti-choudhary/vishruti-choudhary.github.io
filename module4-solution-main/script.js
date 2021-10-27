var names=new Array();
names[0]="Vishruti";
names[1]="John";
names[2]="James";
names[3]="jason";
names[4]="paul";
names[5]="Ram";
names[6]="daisy";
names[7]="peter";
names[8]="lucy";
names[9]="jimmy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}