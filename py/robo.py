for _ in range(int(input())) :
    str = list(input())
    z=-1
    for i in range(len(str)) :
        if str[i] != '.' :
            if z >= max(0,i-int(str[i])) :
                print("unsafe")
                break
            z=min(int(str[i])+i,len(str)-1)
    else :
        print("safe")
