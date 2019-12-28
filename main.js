$(document).ready(function() {
    $('.next').click(function() {
        // immagine corrente
        var img_corrente = $('img.active');
        // pallino corrente
        var pallino_corrente = $('i.active');
        // recupero l'immagine successiva
        var img_successiva = img_corrente.next('img');
        if (img_successiva.length == 0) {
            // se non c'è un immagine successiva > recupero la prima
            img_successiva = $('.slides-container img:first-child');
        }
        // recupero il pallino successivo
        var pallino_successivo = pallino_corrente.next('i')
        if (pallino_successivo.length == 0) {
            // se non c'è un pallino precedente > recupero il primo

            pallino_successivo = $('.bullet-container i:first-child')
        }
        // tolgo la classe active all'immagine corrente > diventa con display none
        img_corrente.removeClass('active');
        // tolgo la classe active al pallino successivo > riprende il colore di default
        pallino_corrente.removeClass('active');
        // aggiungo la classe active all'immagine successiva > viene visualizzata
        img_successiva.addClass('active');
        // aggiungo la classe active al pallino successivo > diventa rosso
        pallino_successivo.addClass('active');
    });
    $('.prev').click(function() {
        var img_corrente = $('img.active');
        // pallino corrente
        var pallino_corrente = $('i.active');
        // recupero l'immagine precedente
        var img_precedente = img_corrente.prev('img');
        if (img_precedente.length == 0) {
            // se non c'è un'immagine precedente > recupero l'ultimo
            img_precedente = $('.slides-container img:last-child');
        }
        // recupero il pallino precedente
        var pallino_precedente = pallino_corrente.prev('i');
        if (pallino_precedente.length == 0) {
            // se non c'è un pallino precedente > recupero l'ultimo
            pallino_precedente = $('.bullet-container i:last-child');
        }
        // tolgo la classe active all'immagine corrente > diventa con display none
        img_corrente.removeClass('active');
        // tolgo la classe active al pallino corrente > diventa grigio
        pallino_corrente.removeClass('active');
        // aggiungo la classe active all'immagine precedente > viene visualizzata
        img_precedente.addClass('active');
        // Aggiungo la classe active al pallino precedente > diventa rosso
        pallino_precedente.addClass('active');
    })
});
