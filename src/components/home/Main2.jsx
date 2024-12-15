import { Button } from "@/components/ui/button"
import { HStack,Box,Flex,Text,Image } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Main2(){
    let [index,setIndex]=useState(1)
    let image=['https://i8.amplience.net/t/jpl/jdfr_product_list?plu=jd_671508_al&qlt=85&qlt=92&w=320&h=320&v=1&fmt=auto','https://cdn.etrias.nl/media/cache/product_thumb_md/T/r/Trui-UGG-Women-Madeline-Fuzzy-Logo-Crewneck-Lotus-Blossom-Cream.jpg','data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExMWFRUXFhcXGBYYGBgXGBYVFxcXFxcVFxgYHSggGB0lHxgVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lIB8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLf/AABEIAPQAzwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAEDBQYCB//EAD8QAAEDAgQDBgQFAgQFBQAAAAEAAhEDIQQSMUEFUWEGIjJxgZETobHwQlLB0eFiogcjcpIVM0OC8RQkY8LS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/8QAIhEAAgICAwEAAgMAAAAAAAAAAAECEQMhEjFBUSIyE2Fx/9oADAMBAAIRAxEAPwD1hJMnXKXEkkkgB0kySAHSSSTAdJMkgB0kkkAJJJJAhJJJIGJJJJAhJJJFAxJJJIASSSZADpinTIAEx2Op0W56joHzJ5ALN4nthMhjI5E3PnEhVmKxr3vzOIc7u62EtcT3RqGkESECSCAHCYAEggGw5mwkmSTK4Z52/wBTshgS/YsHcaxD7sxD2utDctIt9QWifTmpMN20rUiG4mm0tNhUZI8pBkT7eqpfhFpmQRYtcAcs6wCQJhS12tfTh0R4S3KGjaSC2xMkHnfdTWWa9KPFF+HovD8fTrNzU3SPmPMIpeTdneIvw9QiZLTHRzdYPmPmvUsJiW1GNe0y1wkfqPMaLsxZOffZyZcfBhCSYFOqkh0kyUpgOkqDivaalTe2mx7SSe+6e7TFtTpNxblKyXaTj+KwlcO+I8tc6QCZbzyZYjSbC/lMrDmkaUGz0xKVTdme0VPGU8ze7Ub46cyWzoQd2nn6K3lbTtWjLVHUpBcp0CHTrmU6AHSTJ0AMnTJ0DEkkkgQySdMgZ5c53NQveSnqrhrV456wVhaLqwyCC4aSXEx+VrdAJDZJ0nzV9w3s0Wz8R8hwggafdzfqeaI7L4PJTzEQXXvy2V06ouuGNUmzlyZHbSBcJwijT8LBO5Ik26lGUmBohoAHILj4ikaZVlS6IO32SNq81MCgnKKnjQ05Tf8ARbUvphxLImBJ0GpWV4vxM1JDZDAbD83U/ss7xfFPbiS95dGZ0iTAY7wnyFh6Ih9Tloozy3pF4462yr49hyHCq3QwHRBIMZc1+bTHoEcC3GUBQqGKtjTce87MBm7zi4aAT1A3IvKCCCCJB2PzCpMVhXUTLSTTO0xBuAHHWJOt536qLHKJX4erWwmIgyyrTMjWHD5ZmujT6EW9W7N9oaeKZYhtVo79PleMwnVp+UwVi6jqOMY2nVOV4gMqAD/LETlecutiCCYMCIkqhdTxODqtdJa5p7r2zlcOR0kG0tMGCLXC3FuL/ow1y77Pa06zHZftdTxMU6gFOvplnu1DBM0yb6AnKbjrqtMrpp9EGmux5TrlJMR0E8rkJ0AOnTJIAdJJJAxkkkkAeKO40XWpUy+PxEENHn/MIngeDfWr0xXMsmSwGAYEgENsR5uMp6OHDWhoJOUACTNgFd9kqYNYk/haY8yY/deZFq6SPSnfFs2jLCNAFzVXTih6hXRJnKkCMx5LoaJbMawRe5jkram9VVJpc52zRHmSf4CLw9QzljTTqByRBhJBtVqq6jO8TGqtjcIXE0putyVmEyg4zw34rZEZxp1G7Ss5gauU/DdMaNnY/kPXktqFT8d4QHgvYO9HeH5gNx/UFGi0ZeMEcITHTmOSDwOKM/DeZ/Kef8/VG5L8wg2VGJ4YW96mJEiaeuhmGzYjofSEsFxXu/BqgPY6AWP/AANbPdY5x7pAghrgIgEc1bkwhMZg2VNRfmNfI7EdCtKRhxsrqvBGP72EqXzGKT3Fr2nKHDKRpcGJPLvSCFo+Ddq8RRAp42jULRb4zRmygEtcapBOaCLkX5hZ1/DqrYg5gPDP4d5EmRBA0JkWiE1DitalEl4yi03vBsGuAtd21ptA1oml0YcW+z1jC4llRjalNwexwlrmmQR0IUq8w4f2oqNI7wkySLtOhEGJBPIxaGzMWtafazSakSebXjfnBOgtbut1zPtVTRFwZugnWTodpgf+s09HMOaJaC6GCTALiY6C2YI2nx6RM0dp78awLGYMEka/gOxBT5IXFmgCdBYHHB8iACLGHZrxJB0IOhgjcI1aTsQ6ZJIoASSSYoA8j0BKu+yLYqPdtAE+v8KmqNzQB9nktd2XoAUBzJM+YMEfJeXjX5HpZXUS3JlRVApChcTWgK7OZCoXc70H8qwpU4PkhMHTMGdTdWFNi3BGZM6aFw8KWVG8qhgpsZXbTeMzoa614gOm19pUqy3+J7owtS3iGUdS/ugD1Kpuyfa40w2jiXSycrK5Ph0hlUnzEP8AQ81Nx9NJmn47wcPmowX1cBqT+ZvX6/Wq4fi47jtTofzDn5rYAqh47wmZqMG8kDUH87evNTLRl4wZxuuggsHiMxyu8Q5aOH5gitLINEzY3QuMxb2jwi9QNl3gbTMDMSPe+5hTZks6aMtFbVbRJe17G9yC5zZp6kgGCelnAkFc1eBMjuPcANBa2iLdSp6ZGwde6In2Uoeny+Cr6UNTs6bw9t9ssGfMHy9guDwKsCCHNsIEONhpaRA1WgkJyUcmPigXs1ha7cRRkQBVbNwe7qdD+KNeYC9SXnVCqWkOBuCD+xW9wOKFRgeN9uR3CviZDKvQlJMkqkR0kyeUDPK8ZQNN72EAkFwAloMFry10E7QPprC2PB6LmUWgy5xlzj1eS46W1Ky/aktNcBsZskkakQYaekyfOOi3WGbDQOgHyXFCKto68knxTIi0qCphy62nVWbiN7KupY5hqOY1wJb4hyvA+h9ltxRNSYdQoRHREhRUnqTMqIwcVGqF4gKVxVdxfGNp0y5xsP1sB1SY0YrtvjBUrU6IE5Q52sQ9wLKY66u+UXhYdrLuY4WiCDvFvplWl4uM1V7nODsxB0MRoBBAMahU3F2EVG1CCA8B1zm5NcS7e8dbXvKip8my7hUTa9mMe4UaDnPL6Tm/DzunMytTPwy1x3a4tdDj01m2oCy/+HuNa+nVwrgDkh8HdlUun+5rv9ysaNCvQxGSQ7DPBLSfFSfsyd2m8TppOgVZQtWiCdOmAdoeFZT8VlhM2/A6df8ASd0BRxGYXs4GHDkf2K2jgCCCJBEEdCshxjhxpPzN0/CeY3YT02/8qLR0Rd6OwUpQ1GuHAHp6g8vNTNegZ2bpw2ycJgUCOXNK5hEAKNzbIAfDfKFfdmsXleaZNnRHR2nzss/RdCIL4OYevl7rUXTMyjZ6CnQnDcX8WmH76HzGv7+qKXYnZyDpJk6APLOMujFVHiYYGOLo0IaSB5nLvzW+4ZiM9Nr/AMzWu9wCvMuOYxrqtYAdwVNd3ODQ0gepcFpOxHG2low73f5jQY5FoNgOoBAXFB1JnXNXFFv23c8YYuY8U8r6bnOIDg1ge0ucQQQYEnzGo1WQoY2sAfgta8mDRZ8Sn/1HS14ql7Wv7oIyiZLmmAJna8compTcwG5G+h0OU9DpHVebOa6i8lzabS05acCt4GtawNcXZmsc0tphsZB3SbFdEWnoi1Wzd8H4+ypkbPecXDUeJniEgnS/nEixCvHYiBMx1Xj764pCkaIaHsqNzU6YgZnsAMBziLhsQTfLrK0mJ4g+q0Bzjl1iInlbWN4N+ajOXArCHI1mI44xocCQXD8IIJPoFmOL8SdWLY7oaQ4D+rb2QjDaFxUbuuaWVvR0RxKLsbibc2UmSfDJeH6QQ3m0Q7fr5KmxVKaThHhOaZ2Igy3ytI5AG8K8xpJp3I7paQMlyDIPf6SbHp0VdTb3oDcxILReDJ0g7zpG4JG6cXtMbWibsLj20sQM5AFRvwif68wy36m3/cF6cWgiCLLxIMhzmcjIO4LSIPn4D6L2LhPEWV6TarDZ2vMOBhzT1BBC7cbvRwZFTBWNLKj2uPdMOZOwjvCT1vHX2lxWHbUaWu0PuDsR1COr0GvaWvaHA7ESqjhwNNvwqjiXNc4Au3aXEsAO8NIbz7qxkhWxwkZLG4Z1GoZH+oD8Q2e1TU3jUGQtTxLACq3k4eF36HoVkX0zScQQQAe838p5jmConSnYfTckeiGpVRtoppTA7aSpWMUTXKVoQIbJdIn2SCTwgRcdnMZkqZD4X6HrsfqPZatefU3bH0Wu4JxH4rYPjbr1HP8AddGKXhDLH0tEkwSViJ4LTJgEkk35957rk+5PuU5w7nwGuLXAyHixaR+JPljyFh57n76rQ9lOGZ6jCRINyNsovfzsuGPZ3TdKgzE8YrCkGVGznbZxkd07mATpyVVxCg57XOEvJblexx7tRsRE/hdGh9DIXofFuHte0kCHNGZpGoLbiPkscWEEgggzoSCRN4JFib3SypwaDC1JNGfx1ZtQCoJtUYX5iczSIZDgdIsBFobA0gXVKnAk36Kr7QYZmXPcEw1xaAZB0BBImIF55ehlLiAORpkOc3Nfe5A/3AFwHL5zl+SsstOgjeISeuw5RFm/3ZRKBFGSC2HEEEENdEiD4h+ITFtdYVc6noRGosTI8iUfh2y4AhpB2eSG68wbeaEf0jla4t63W/DPpTcXYWVpM3kmTJgGJcdyWuBneAd1rOwnEGNc7DGxeTUZrBgAPHIHQ+6zvaRvgJEAEW1gOaZynTLLtNjIUfD8SabqVYXLHAkD8US1w+q6oSppnLkjaPXgocdhhUpuadwb8jsQp6bJAK6DV1HIZrs7XxGV1PEt79MwKm1RmzujufvuieKcOFUSLPGh/Q8wrevQzDrsVR8Mx73VKtKqGtex3dgnvUzo6D7H9FCcKLQmZuphXMJbEEat/VpUrDuPVarGYNtUQ7UaEajyWbxuCdSd3vIPGjvPkenspVRdSs5BUgKhDuf35Fd5kDO2lSCsJQrJKeo1AqCnO5XC6oV3U3Co3Ua9Qg2PU9J/sU0ZaN3gsU2owPbv8jyRAWO4HjPg1Cw+B0ek6e36rXgrqhLkjmlGmeGU6eZwaPJemdkMIG0i6NbD/S2y8xbhBVOQiRIJ5DcSVuOFY59JjWMqHK0QGu74j1v81yRmovZ0Ti2jaZVgK7ADaIu2wIEtOWL3NgL85Wjo9o/z0z5sIP8Aa6I9yqPi9RrnOeyS3MT3jB718oYbtaDztLrIzSjJaHhTi9gLqOcFtx1BIN+RBkLNY7B1MO8VC81O+buuemaTe1p6LTCppFkJjKecFp0OnMHYqEJ8TqcbO8NiBUaHDf67j6qQuVBwyuabyx1mkwf6X6A+TgtDbdKcaYJ2S4WpleHEhoEmS3MLAm49NdplBVCSd7AC4iA0ARG0RCsKJIa93+YBlIJaAR3iAWPJs0EaTuFWMLnGAbk6kxcnmeqfgl2B9pR3AyIs066Ew6RyaRlPmSgsGZafOfdoP1lGdoK4mB4fw7Q3M52WehzDmhcGLHyb9FXwk+j0fsbjatXDNdUGV4c5hvIIaYDgdbjmr4VXDUSsJ/hdUqTi6Zd3G1Q5rTqM4LiR0NvZb0LtXRwvsQxLd7Kr43wChih3onnoY3EqzcAdRKifhGnSR5JvYGX4VUq4eocPVksFqdQ8tmk7ffrfvaCIcJB1B0UOL4W5wIzAyIusXxDieP4eSKlM1qP4XGZYOWYWI8/dRcGUjI0OM4PF6feb+Q3Pod/VVDpv9DqPdX3CeOUK7GvZUac0Wm4dHhINwfNEYzAsqa2ds4WP8+qm0VU/pmGv5H9PdTC6WP4dUp3IzN/O3UeY1HzCEoYkC5uOY+pCyU7Jy0rtjtlJTLXCxB8tf4XL6V9UGSards8uXz1Wn7NYwvpZTqxxZ6Dw/KFmnNhoHOPqrDsbVl+IG2cfKR+irjeyWTowGDbkbDR5nmeaOoViNTCFJHP21TBx9FxHSWbsTAUmCqmpmZe4Bs0E2ItOrR+In+lVYNpTsqhrg43EiRzG415JgWbnqJjr3+/NSYttwdnCQYiecA6Cc3soabZj0WGqLJ6BOIcPzODgBezx05+Y1RmFpENDS7ORadz6Lot++nREURkAebGMzZa5wcWvaCCR9duhIW1b0J0tkWOZAa3QwHSHCHMJMBzNZDhqeWiiwVKXGGkgA3E2dlOSSNCXQAoi0XIAAm0CLTaw08pPKbIluFPw4FN5dUBykQA1zXWN22tN5jvBNbZl6RQ8RxAcSYgmXEDZztYjS8x6K97GcNpVXvFUTbuAmAS0CTMg8+nnsXgezlMHNX7ziZyiYGtifxb9PNAVqLsO8i5HeLTOTNaWuLmnUW+XRWivWSk7VImdj3cPxDjkBbUAFgQ1zWmxBBIHi+YkLRYDtphXgZ3Gk4xZwLmyf62iB6xqEGMVRxtN1KrGcxezSHOAymSBDg552cO6AeuK7R8BqYV1pdTLjld0MkA6GYB2j6C6bXRzuKfZ69hcXTqAOpvY8HQscHA+RB6H2RC8AaWzmjKb3FjcQbjojKPEqjIyVqzQBlEVagEeQdH7W5Ba5mf4z3OVzWpNcCHCQV4rT7SYlpH/ALvEWBbBeXAzmuZkkjNqeQ5BG4PtfjG5YxJcGkkio1hL5ixOWbbQRr6J8kLgzT8c7A0yTWwx+HVBzNjTMDIsosH2pfShmOpGkdBVaCabvMC7T7jyVOO3OOykGrRDtnfB00tHxI5lAcV7WYiu0sqGgWwLfCuHWuSXQdDbr6pNRfo0pI9F4bxalXbmpPDgDB6HkfkoMfwenU7w/wAt/wCZu/8Aqbofr1XlGEx1agZo1gw2kQXNeR+ZpMAekiLG61nCP8QmWbim/Ddp8RsupH/7M9ZHVTeN+bNqddhGO4bWpGS0uH56c2HVuo+Y6rihxd28PHMQHexgFazDY1lRofTe17To5pDgfUIHiHCKNUkluV35m90+Z2PrKl0VUr7KWvxqQcrH5tpbAbaCSdNzELU9h8EWUS8iC8yPIWH6rIN4R8V7qNKoXkawNIIm+nT3XpeEqZWNaRo0Ax0CriW7JZX4jydjRsui7bVdNYF2xg/hcNnXREQSonmPP5/wjCydP5KhfR6ffmnYBOBxQyZXC1zbZwaQJPK4OiLfTZ+F7SO+QZ1DAL87zbyVXQIYSXmBz1i86b7qyocPc6HMbmkeLbcXJ+nIrSVgmcOqATlOYgU3NILYuRIcCZJA2bKTKTnmGtm7tJAAc4uAjMQyLCBy3VtQ4QB43TGw9f2Vi0hogCAPuYW1B/4Zc0VNHg1v8w/9rf1P35qzfUG3ufvzXL3bzKFe8ytpJdGG3LsID4TVMM17SCMwOo5LgTCmopiaMzxLhFSk74lO4GjgYLYc0tmLQImbDq3ebhfaduU08QGgub4r3Hw4uHADQWa4xBtGq0wfCpOK9nmVJdSIY4zb8JkXttNv2W0zD2Bcc7KtqZn4Z7TcuymMsE1nBrCBmBinplDYNnQJWUxNapSd8FzPhm8yAQRoS03a4dRIVyMRisK7L3iDIIc45S2SbEG9s0ySI1ja4o8Yw2KaKeIpyct2hoJzCCXtNgSG/EAIIa3MYnU70Z2jDsFMAFwPQwDPJcVMKNWOnmNxvp9hayv2Kp1IGHrBr3X+G52YAgwWtk54mYJBkMJnRU/EuyONaBFNr27ZT3jGa5a6Do0219UUFlHUdTkAk25EX/ZMHUSfxAef6J63A8W0nNh63WGOcNY1bYhEYfgVd4/5FSdZLHNgXvJHQ+y3SRi7IhQoxMk+4j91EzDiY2OnVaDC9lce+xZlAAjM4ddA2TsdQrrAdgmU+/iao8Tbd0NJm7TMk6HWNOZWR6M5wHgtUVc1EvaLEluZpPQ5RD/Xe2pC1fGauLY6lhmHPVfTJfAE5gSDlNosJvzClx3H8NhR8KgwOcDkJgAZXNlpHd0sOdgzWYFf2arVHV6eLqmBnDc1oJc3K7bwk3nnZKW+xpfDc9k+BjDUu9eq+7z9GjyV4VzKdUSrRPs8qb0Ero0hOwP3sLqdlDb7+VgiaNGSAF5KPRbBGU9oJP3sj6HCCRLyGjkLm0em4R9Om2nZol25O2v3Cedl0RxpdknL4R0cDQZ+DN1ffntpyRYxANp9rBDRK6ayLqnXRkKBTVD6KHP0TSUWFDmCuKbbrpi6L0gGeyE4MLh1SUzSgCWeqgxmfI4M8UQCNRNi4Dci5jeFNkTtJCYFYcYaj30/hGoxrW5pgd5092HxJgDl56IOt2fpVQXUnFszLTJBcJBkG4cDIkgkadFZ4/A/EzEOyOcMptma6PCSJBkbEEH2ChweEqMc0HKWtZHxBIc4g6kDnLiRcSAR03oyUj8LiaH4CW6dzvAgmTP4rmJkj2TYftBUZAEjK6coL2tuCDLQDPrtMzJB1jmrhwzCHAEdRI9ilyHRQN7VPaDLjGbMJ+HmcSYMB1mzNUmOusuJer22dsYm9snccJ7jZd7kk7i0lXH/AAugdaVP0aBy5DoPZcDg9Cf+U3yv+61yM8UZrGdsa7tHEZgZDZF5OXKWaDQkm5M3Vef/AFmJJgPOYEOPhabnvTMGxja1gtvSwFNp7rGNPRrQpqJS5hxM5wnskGnNWIebdwDu2EQTvyj6q9xlEOpOYPywOUi7fmAiC+64Cy3Y6LrsvjvjYZjiZc2WO82GJ9bH1VssX2BxjQ6vhzZweXtGxEAOj5W/ZbSV0ReiDVMwgHL5IjDDKC+3Tz/XdMRHt9gBV+Dxxc0sdqTmadiCPD5jvei8/Gt2dsug+nud/qpA5QMMKQlWMkoqJi5cAkJFyBHeYJ81lHKYvQBJmSzJApeYQA9MSpKYUTHALsvJQBLmGidjlFEqZoTEROKdr1w8KMDdIKCi4bpZUKx97qQ1QE7CiR0J5tMICtj2t1I9bfVCVuN0xafYdJtMA2RYUWjTCic6CqR/GXGcrCf9Rj6fuhcRxGru5rL7a69Z2QOi8dXA1IA5nRA4vjIiKfeP5th166KupYGrUuGVH9Xd1umxdb2Vrhezrjeq8AflZ+riLeg9UrDRSNqVaTX16QLn0y1xMxMvaCJ6ibL0vhvaChVY1xeGOIBLX92DFxJsfQrN8Vw7G4d7GNAEaeo15nqgWt5/f7JfyuPRlwU9llicbTp2Jl3IXPqgeL8INNxqNBNLWRrT5jy6/ZgFDc/wf1ctJwbiIeMs95oEjps4dCpY2rKz1sz+FxLoF84/u8uqNbWB6ef7q7xXBaL7xkdzbafMaFBVeC1G+EteOXhd87fNWpmOSYNM/f6p5XNSg5njYW9dtdZGqYOPnr18ht7oGS20Sawbe/sos8G4n19d0wqnr7H9EwCHU4UZldNxYi/0O+i5OLaenoUhHcWXbWoY4xmzuWx302ULuK0+Z9o1sNYH/hAy2YQEzqqoTxc6NY7bX+AVBVx1U7Botvfrf225phRe1qojVVuJ4qxojNPl7xOnP2VbRw1WrpmqaeEd2Y5mwlWWF7Nv1dlp/wB7o5ch7lINIAq8VqO8DfvzNt9uSH+JUe6MxPRoLjryb7brVUeA0W+IOef6jb2ED3VhTY1ohrQ0cgAB7BAuSMdQ4HWdfIR1e4N9wL/JWFDs0R4ntb0Y2f7jH0Whc5RYjENYC57g1o1LiAB6lIzyZX0+A0B4szz/AFOP0bARlHC02eBjW9QAD7qL/iNI6VG+4/VDVOL0haSfIH6wk5IKbLMuUT3Qs/W43WcHhtMMM9xxM92dS2NY2+qCx+KqVGZKjhBF2NEZuhJvryhZc4r00oSfhb8TxzDFMEOc6DY6NF5J62jnKFa4us0T9PRB8NwAG0DZo+p+9lf0qIb5/eik5WyijQJVZ6lVmLpGQ4ONN48LmmHDnHMaCCCNJVs/og34XUxJlYTp2aqx8H2xq0+7iKRcB/1aQm2xfS8TdvCXb2Wo4TxzD4gTRqtfzAPeH+pp7zfULGVsMf4/lV+KwNJxlzBI0dJDh5OFx6LojmXqJSxfD1YVFBUwVJ2rB6W+i80pY3F07UsVVLRo2oG1R5Fzxm/uVhwjtLiqcmu5uIBOjQ2k5vRs91w2uR5lVU4v0m4SXhsn8Gp7Oc32I+iGqcCO1Qerf5VXU7c0Gg5qddrgJyfDLieksJaJ6uARVDtphCzPUqCkYJyVCA+wmA2e/wD9s8lqhcmjp/AqmxZ/d+yid2fq/wDx+7v/AMqywXH8PWaHMqAzsZa4HkWm4PQ81zxHj+HoAfEqtbOgu5x8mtBJ9AlQ+bK0dnqm5pD3P6LtvZt29Vo8mfrKlwnazDVHBjXPkzBdSqsbYE+J7ABYc0sR2nw7agpZwSROb8A1gOfoDb5jmEmh85D0+ztMeJ73eoA+Qn5omjwqgzSm0nm7vH3dKBxfHgGksbnNouQ3/dHyHy1VdT4ti3ESKTRa0OJib97N+iw5xQ6kzUlygrYlrW5iRAEz0/VZ7iLjWGV92gzGjT1dz8lGyk1rcoEch9fLyU3mXhpYn6WVLj9N4JyvEfmAE9Rf6wqvEcRxTnGHCm2bAAF0f1F038oTtZH3ouKj/wCBzU3mkzaxxQ+OxVR7crnwDY5RGbpz9kFSw3dDTOUXDZJE8yCimUr3P7Afe6R+XzKxzb9NpJEccgum0+f35rsNAk/P9kK+qXGG2HPn5JDHfXkw255/qpMJgpMm55+fJTYLB25D6qxaOXumJselSDbDVSyAuCYSL1oydU2gmFzWF4TJLI0CuAuYCANIOdJTpJGhVaQsev0Q2JYAJjr7J0k0MWLw7eX2FHh8K25iYSSTsXg1bCMdlDgCIm4G9+SehgKYNmgQAbAC58k6STbBJHdbDNkiLfz/AAjcHgmAiG7J0krAJKRsPv73SSQAi1cEJJJAR1TBjYJmj5iT+ySSAHqi+XYGPlKamJ6ai3KJSSQgBsWZOXb9kZgqDbFJJaQPoOc2Andb0SSTMETl1SEpJIGf/9k=']

    useEffect(() => {
        const intervalID = setInterval(() => {
          setIndex((prevIndex) => (prevIndex === 0 ? 1 : 0)); // Toggle between 0 and 1
        }, 2000);
        return () => clearInterval(intervalID); // Cleanup on unmount
    },[])
   
        return <>
                
                <Flex
  overflowX={{base:"scroll",xl:"hidden"}}
  fontWeight="600"
  height={'full'}
  gap={2}
  justifyContent="space-between"
  css={{
    /* Scrollbar styling */
    '::-webkit-scrollbar': {
      height: '8px',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'black',
      borderRadius: '4px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: 'darkgray',
    },
  }}
>
  <Box w={{ base: "100%", sm: "60%", xl: "49%" }} cursor="pointer">
    <Image ml='-60px' h={{base:"80%",md:"90%"}} minW="280px"   src={image[index]} />
    <Box
      mt="10px"
      style={{ textUnderlineOffset: "4px" }}
      textDecoration="underline"
    >
      Shop the Looks
    </Box>
  </Box>
  <Box w={{ base: "100%", sm: "60%", xl: "49%" }} cursor="pointer">
    <Image minW="280px" h={{base:"80%",md:"90%"}} w="100%" src={image[2]} />
    <Box
      mt="10px"
      style={{ textUnderlineOffset: "4px" }}
      textDecoration="underline"
    >
      Shop All UGG
    </Box>
  </Box>
</Flex>

                
        </>
}