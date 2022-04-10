var linha= 1;
var tr = document.querySelectorAll("tr");
var coluna=1;
var media = 0;

while(linha<6){

    while(coluna<4){

        media = parseInt(media) + parseInt(tr[linha].children[coluna].textContent);

        coluna++;

    }

    media = media/3;

    tr[linha].children[coluna].textContent = media;

    coluna=1;
    linha++;
    media = 0;
}
