$(function (){
	$('.butonlar').click(function(){									//butonlardan gelen değeri ekrana yazdırır.
        $('.sonucEkrani').val($('.sonucEkrani').val()+$(this).val());
    }
);

$('.temizleButonu').click(function(){									//ekrandaki değerleri siler.
        $('.sonucEkrani').val('');
    }
);

$('.hesaplaButonu').click(function(){									//eval metodu ile işlem cümlesini sonuçlandırır.
		var islemCumlesi=$('.sonucEkrani').val();
		$('.sonucEkrani').val(eval(islemCumlesi));
});

});
