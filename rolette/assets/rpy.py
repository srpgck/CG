import os as os
ntd = "themes/kurtbk"
a = os.listdir("./cdla/"+ntd+"")
i = 1
for b in a:
 os.rename("./cdla/"+ntd+"/"+b,"./cdla/"+ntd+"/"+b+"I.txt")
a = os.listdir("./cdla/"+ntd+"")
for b in a:
 os.rename("./cdla/"+ntd+"/"+b,"./cdla/"+ntd+"/"+str(i)+".txt")
 i=i+1