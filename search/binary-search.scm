; Log(n) (i.e "halfing") search through a sorted list 
; This actually will not work. In a simple list there is no concept of "half" until
; the whole list has been traversed. Additionally, since lists do not provide
; random access, there is no way to cut a list in half without traversing
; to the half way point. As a result, linear time is fastest worst-case 
; complexity achievable; not log(n).