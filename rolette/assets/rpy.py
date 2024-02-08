import os as os
a = os.listdir("./cdla/noti")
i = 1
for b in a:
 os.rename("./cdla/noti/"+b,"./cdla/noti/"+b+"I.txt")
a = os.listdir("./cdla/noti")
for b in a:
 os.rename("./cdla/noti/"+b,"./cdla/noti/"+str(i)+".txt")
 i=i+1