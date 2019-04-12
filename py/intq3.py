a1= [4,3,5,2,2,1]
a2= [4,3,2,1]
a3= [5,4,3,2,1,6]
t = []
for i in range(len(a1)):
    for j in range(len(a2)):
        for k in range(len(a3)):
            if ((a1[i]==a2[j]) and (a2[j]==a3[k]) and (a3[k] == a1[i])):
                t.append(a1[i])
print(t)

