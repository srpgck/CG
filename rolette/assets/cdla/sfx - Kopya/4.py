import os

def dosya_sayisi(dizin):
    dosya_sayaci = 0
    toplam_dosya_sayisi = 0

    # Dizindeki dosyaları say
    dosya_listesi = os.listdir(dizin)
    inm = 0
    for dosya in dosya_listesi:
        inm = inm+1
        ltnm = str(inm)+("."+dosya.split(".")[-1])
        dosya_yolu = os.path.join(dizin, dosya)
        dosya_yolu2 = os.path.join(dizin, ltnm)
        if len(dosya.split(".")) > 0:
            os.rename(dosya_yolu,dosya_yolu2)
        if os.path.isfile(dosya_yolu):
            dosya_sayaci += 1

    # Dizindeki alt dizinleri tarayarak dosya sayısını arttır
    for alt_dizin in os.listdir(dizin):
        alt_dizin_yolu = os.path.join(dizin, alt_dizin)
        if os.path.isdir(alt_dizin_yolu):
            alt_dizin_dosya_sayisi = dosya_sayisi(alt_dizin_yolu)
            dosya_sayaci += alt_dizin_dosya_sayisi
            print(f"'{alt_dizin}' dizinindeki dosya sayısı: {alt_dizin_dosya_sayisi}")

    return dosya_sayaci

def main():
    konum = input("Dosya sayısını öğrenmek istediğiniz konumu girin: ")
    if os.path.exists(konum):
        print(f"'{konum}' konumundaki toplam dosya sayısı: {dosya_sayisi(konum)}")
    else:
        print("Belirtilen konum bulunamadı.")

if __name__ == "__main__":
    main()
