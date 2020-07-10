// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "Nike Air Presto",
    category: "Clothing and Shoes",
    price: 55,
    description:
      "The Nike Air Presto Women's Shoe delivers the same unrivaled fit and comfort that marked the 2000 debut of the original.",
    popular: true,
    imageUrls: [
      "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/wokkcny4zbhvzobfwc7i/air-presto-womens-shoe-89Tqz1nG.jpg",
      "https://media.hypedc.com/media/catalog/product/cache/1/image/750x/9df78eab33525d08d6e5fb8d27136e95/_/o/_o8a4329_2.jpg"
    ]
  },
  {
    id: 2,
    name: "Casio F-91W-1XY",
    category: "Jewelry and Watches",
    price: 101,
    description:
      "Shaped in an iconic casio design, this watch features a digital display, stopwatch and an LED backlight. The watch is housed in a durable resin case. Suitable for everyday styling.",

    popular: false,
    imageUrls: [
      "https://cdn3.volusion.com/htlyr.vuqkj/v/vspfiles/photos/F-91W-1-2.jpg?1408684729",
      "https://i.ytimg.com/vi/XJGI-v31-dk/maxresdefault.jpg"
    ]
  },
  {
    id: 3,
    name: "Seiko Silvertone Black Dial Solar Calendar Watch",
    category: "Jewelry and Watches",
    price: 200,

    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/81XUKQex4nL._UY445_.jpg",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQExIWFRUVFRoYGBgVGR8YFhgYFxUYGBUXGh0YHykgGBomGxUXITEhJiorLi4uGR8zODMvNygtLisBCgoKDg0OFQ8PFSsdFR0tLS0tKysrLS0rKysrLTctLSstLS0tKy0tKy0tLSstLSsrLSsrLS0tLSstLTcrNy0rLf/AABEIAQgAvwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYEBQcCAwj/xABCEAACAQIEAwUEBggFBAMAAAABAgMAEQQSITEFQVEGEyJhcTJSgZEHFCNCcqEzYoKSsbLB4UNTY9HwVHOi8RUktP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAQEAAwEAAAAAAAAAAAAAAAABESFRMf/aAAwDAQACEQMRAD8A7jSlKBSlKBSlKBUGpqDQRepvUUoPV6V5pQeqVF6XoJpS9KBSlKBSlKBSlKBSlKBSlKBSlKBSlKBXmpNRQKUpQKUr54iYIjO2iqpY+gFzQaztBxbuVCJYyNtfZR7xH8P7Vz6TDeMyfaK5NzJFIwcnqSTc/vVu5YXkZpc6uzG5sdugHkBp8KxZQUBLiwAuSdgBuaivhB2mxkJAWbv/ANSaOz5Rv4ktYcsxLG/KrJg+3WHbSRJIj1tnX5pcj4gVo8Cygl2Q5nABufZVSSqAA2FsxudbknlYD7yYeCTcWPmNfytp8CaqLrgeKQzC8UqOP1WB+B6HyrLvXMZ+zwvmQ+LkR7X7NrPXnCcbxcLFFxBbLcHvVaVAQSCpOj5tN8xA29A6jSqJhO2uIUXmw6yqN2wza8/uOSF+MlWbg3H4cSPsywPuyKUO1za+jW6qSKDa0qL0vQTSlKBSlKBSlKBSlKCDUUNKBSlKBWq4yyuO6Oqn2hyNxseo8qzsdiREjOeQ08zyHzqotj7kknepRh4nsrBfNE8sDdYn09Mr5lt6AVh4aOVcQIJcSssKx94waMq9w6iIM2YggnO2w/R2rcnGC1ydudOFcPQgzlnSWYAsVNvALmJCpuDlVted2bWor0cFG3sn5GsaXh7DY3rOfhsg1UxyD4xv+VwfmK+bZ19sOnm650/eSg1WIaSMaKb3sByJO1/IbnyBNfIC2nMkkk7kk3YnzJJPxr7TYaeaXvY5URISVFrusjsvjP3bBVbLz8RcHa1eTNOn6TDiQdYzfT0ax+AFBjyxpvbXqND8xXrs5xKN8UiJIpdZFzqpuVuSGudiTY353vfetL2s4yiQkx51dhkAIKurODdgGGwUNr1IrS/RlCBi1AIBJTwhct7SAk6EjT+taH6BpSlEKkVFSKCaUpQKUpQKUqDQRSlKBXmWVVF2IA6nSkjhQWJsALknYAbmud9qeNSSBpFBChXMQ55V0Mn4mJCjpcDrQZ3a/j6yRocPlnAdgyCQRMSpKHIZBZiCCMvO971oZccIwDMkuGv/ANRGQv78ZZPiSPhWwwnBp8LCkRJNkAbmGbdjY33a5trvURYlo9AuX8Byj932D8VNRWBJJ3qgKVeNyAWRg6FdSwupI1ClfjW0THG971gx4PvJJJo8OAQFR5EQKzH2yGyAKbBlN7D2vSvLKRvQbqHiRHOsl+PCNGc6hRew3PRR5k2Hxqtl6xZJgZYo7i9zIASAT3drWBOtmKn4UFmjmyKE5i5Y9XYlpG+Lsx+NfVZtK0TyMpysCD0IsfzrzisbljZuimoKf2pnXETtZvY8Nt7H4bcqzPowwduIJcgix+YBYfy1WcWAzFnjVt9bZWHPRksw361bPolKNjbKJLrYnO4dQMklreEMDccyao7fSlKqFSKivVApSlApSlAqDU15oFKVq+NY/IpRTZiLkgXKr5AbsdgKDH4jfEv3Cm0Sn7RveIPsjyHPzrH4tw5ZJYYVtZCsrDosRvF8O8A9bHzrGwmNkWMIAI+ZtYsOgubi45nmb2tXxAAcyffbRm3YgbAk62022qK3bzKvhZgfK9z/AL1r8dhYW2LA+SMR/CvCv5H5VC4lb2uL9Li/yoNVFw8KSbhWv7QEkbHWw8agE+maslTMQfEJlG4YLLbyJSzqbcyT6Vsix6H5Vh4jBROQzIMw2YaMPQjUUGEyxN7cTRnrG2dR08LWY/C9VviHBMLO7PIrSD2UaxQqo2IBswOYu1wVuCoO2txiw8q/fEye7L7Y/DIPEevizdNK+kPDInFgSpA1VxZhy5aEeYuKCgjhGIiFsJjjl/y5hdPQBwQOWpJ+FYnEeKYqNSuKwiIP8yNtHtq1gGyg2B6Cuiz9mr6qQaqPEcM8UmJYNZosOVUjdZHF8wOx8J2tQU+fEwyD7EsTc3DKRlGljcjXf8quX0N4O2Jme2yC5+YX55m+RqsYnh0Ukrs0CBSI2UxEwsM8EbkXSwPiY+0G5V0r6J+GrFDKytIwdh+lsWGW4y3UAMOd7C99tKC90pSqiRU1AqaBSlKBSlKBXmpNfHFYhY1LsbAD/wBAedBj8V4gIUv94+yP+cqqqYpnYnmTWPisS+Jlv12HJR/z51Uu0PHTJC/1abusMpyPOms07c0w+thvbNfne4AzMG94z2qhhYwxq2In1vHFstt+8faMC4J3IGtqqPEO187tZp8gv+jwYzeoaZiLnf8ARsPMDaq/a6iPL3MDBiqKMwdlvYytvK2awJOi3uFFDJYDKMvgKNzDA31sdtLD4XqyDO43HNHkabA2zRM6HGOZpCkaZ5GCObpZbEgi4tatPHjASgGDwX2gJF4wLWd0N/FZdUJt0KnnVp4/wtJeD4fHKXaSGTuZM7lgseeRQqqdB43iP4T0AFc9aqLTwHFSyNGuHwjq0mYr9VnaEt3di5yMxQ2zi409dDViwnbmeOQxMwkKmzQ4xe4xAPMCRR3ZPkwvtvvXv6HOyyTLJjXLq6SBIHjbKyNkIlYbq1xKFsykeE9a53jsWjTEEtNEk8jKzt9pKrMAGd7XJZY0ubCwva1Qd14F2jgxLGNC0U41bDzDJLbqovZx5gnztW+sH6hgdCNGU+X/ACx2OlfnPhmNYLHGxaYa2EdxPAEtZ4XAujWDNlF1sovvp1bsh2sMuSKZw5bSHEAZVlIF+5lG0eIA+7sw1G4vB0DBzKxKP4ZFBbTZ0GhdfTS68iRyIJp+MwYmhmlAI74tIc2jewLhuhFrW5Wrc8QgE8eQkqwNwQbFT/sQSCOYJrE4FiRLG2EYZJYUKEHW65CFe53uRqedwfvVFUJ4T3lwdO5h+JEKrf5AV1vsThO7wkY5tdj8/wC1c9xMH2uSwLWUW62uB/Cus4SHIip7qgfIUR9qUpVEippSgUpSgUpSgg1Tu1fEc79yp8Kb25t/bb51acfie7jeT3VJHryHztXPTi1iWXFSnwwoZG8yLkfHc/Cg0Xa3H2BwCyd2MneY2VT4oojbJEn+o5IUA9R7wtScDxte+XEGKFkhI7rCtfuVXXRQBbMCQxJtmJJ5Za+XaHGMsaJIftMQwxOKZd/EbQpvsqNcA++mulaKXFMbLnLqgyoWFiEBJUbmw19m5tew0qyDo3GOzpmw/wD8rh3EiyO7zxJr3DM1yF0BKrsSQDpe1tBV1NxX27F9rJcDMJE8SNpJGTZXX+jDkazOF4RsfiJFiEcTMHkVNRGAGW8YIuV0bQ2todr1R6wfaMQ4DF4Exl/rBzK2YAIxRVzWsb2McZt5Ha9UlzVmkiEU4E8bERyjvY7C5CsC6WJANwLbgEHfnW3fC8GxCsQ6xSWGUKww5v4zY96Fg9wXFze+pAzEHZr6RI8Jw5sCIHEmSXJIpUqZJCxVnBykAF+VzZRvXPB0q44vsBLlzxyWF1GWdcjXZI28LRlu+s0qIcq6MbbC9VniHC5YLd4qjNmAKukikpbOuaJiAy5luLgi4qDddkeyc2NzsHMMIVlaU3AJKm6LsGHva2AvfWwOdxrj2GeUtDCIoSBFOiSKTMVN0xUQVRaRCMwk53UaXN/l2m7aHEQphMPF9Ww6oA0anVjuUuv+GDfzY6t0FZw8pVgwCkj3lDL62bQ9dRQdy7G8bM6GORw00IW7jRZo2F4p18mG45MCPKtzLgB9agxaaOv2MlvvwyaWP4ZMj36Bq4z2Z4t9XkVlcOYNGYXAOGlZRMBmALd3KUkF+rnYadvwE4kRJF2ZQ3mDzX1BBHqKitdg+Fxvjo5Cp7xHJFtstmuDqNATexB1sdLVfa0XA4x30jEeLKLHyJN/5RW9ohUioqRQTSlKBSlKBQ0qDQaHthPlhC+8w+QBP8bVz/tM32GHw/8A1OJUNv7Ed2zHqA6LcfrVde2p/RD8X9Ko3aRrYnBKdkw+IkHqqLJ/Sgpkk+DnOMmbFNhsS8qx4VQWAEQCq3eFSAEYHKWY2FiddaYz6NMUFzwSRTpyP6Mnpa5KXP46qksx7rJ3xN3JMVjZTbRwTpc+Wu1688P4hNh2zQTSRH/TYrfW+oBsw8jertTGYeSGR4ZFySIcrKSDYjldSQfgazeFcVeJ1kVsroQVPmOvUHY1rMTM8jtI7FnclmY7kk3JNfMVUdf43AvFcJ9dw6//AGYltJEN3yi5UdWF7qeY090Dm/aTACCUorFkKRyIxFiySxrIpIGx8VreVffsr2ikwcyyrcjQMoNiQDcEX0zA6i/mNiavPbTs43EIYeIwBIr4dc0UhEdlLs6te+VR431Onhtpap4rmPD+ITQMHhlkiZdjGxW2tyNDaxsLjY19+I8UlxBQSEEi+UIipdntnbLGozO2Vbm1zlFbzD8H4bAobE4z6w5F+6wuo22zi/zJX051lv2wGGUDBYGPCq98kso7yRwNCQW0Yg+b9DemeDX8J7E42fxd13Sbl5jkFutva/KrND9HsaLlLT4mU8oQsUSm/wB5nuf4+nKqXxLi2JxJzTzySWNwGPhB3BCiyg+dq2HE+1mOxAIkxUljuEIiU3FiCIgtx5G9MUbSbs4uHQiXFRGWPEDDyYeMWcQYlQjSNcK7N9orrm8IsNb6C+/RjiC2EaIm5hkIva1wRZvUmWOZiTuWNcQmchHIaMEEMC4BkJBuO7OUkba6gbXrsH0SqBPxBLk2mZV6ZUmdh/8AoojonDDae3vRn8iP71vK0kQtPF5hh/43rd1Ar1XmvVApSlApSlAqDU15oKr25a3dH8X9P96pfGVz4jBuPv4fERC/UqsZ/iT6VfO28V4Vb3X/AIg6f86VQ+JOFiixBF/q2IVz+GQGI3PIfaEk8st+VBx+Q+AR94ujm0eU950LZsliL6Wzk+XOtvw7sTxCcAphJACfaktEBrue8IPyBrecR4zJgZMXhIlhCtiExUUkwuyAZWARbElmyRjSxWzG43XVcV+kPic982KZFN/DCBEouLWBUZz8WNXaq/xHBPBK8Egs8bsjAai6mxseY0rFY1M0rMSzMWYm5LEkk8ySdSfOvlVR6D1b+Hdo8RNgZcI0l1gVGXQZjEc0EsdzsMs6nMPFZSL63rQv2exQRJRAzK6K6lLPdXJCaKSb3G1rjnavfZdg2IWEkBcQrwMdP8ZCiHXpIY2HmooImwxAJXXTQf0ru8PA+7w0SRIJF7pg1tUkeMxQ4VSVBe2WxLBrAIxI1Jrh+CkNrMLHmOh/91scFiHhYtC7REm5MbFbnkTbRvjSwdAi7HYLFsVWLupcpYhbjKuVJAHWMKgbJPF4srEktuFqtYrsCza4efOGUFVkRgRew1YAM9idcsQy7ECsnBfSBjkzLIUxAZcrd4oV2WxGUvHl08R1sTrWdN27ibDyKIZIZAkvdIGV4Y3lVgzIcqupuxOuguQKmxy6fDsVdQkb3YIGz6qS1gyBXGcHqVYeldl+h5S2J4gxFg0rSL0tJPIpHqDh/wA6oODmw4w0EDYVUkSb61JMpDGTDwq7ZDqWQlrIV0AsDbXTq30N4EphJJWBBllO+/gFnv0bvTMDyNrjQ0otuQ9/F5Bj+Vq21V/Hzv35yWuqAWzENzJ9m9h7PtC1ZnAeImZXvujlDqDYjkSunn6MKg2oqagVNApSlApSlBBqKk1FBqe1KXw7Hoy/InKf5qoSQq2eGQeGRWjceTAgj+ldE4+mbDTD/TYj1UXH5iqJjcOb9591jb4hVJv86goHa3AO8C4hlDz4Nu6xAIJDqLGKQgG5BUq3kGA11qhYlbN7SMSMx7v2QTqV0AAIuNF8I2G1dw4ihB+sqhksuSeJRczQ67Dm6ZmYDmC43y2o0nZvCwzqmImkXhuJ8cc8OU2e3gWRjGxyWJA5C9+prUo+HYjsQMSjYzFsYcIqsQb5S9gQXBPsxqfvfeIsL61TZ1UOwRi6hiFYrlLKD4WK3OUka2vpVp7adr8Ri1SEr3UAGZVXTvQrFY5GAsAoC+FQAosSOVqjVg2mE7QYmIBRKWUKVyv4lylcuUfeUW90jYdBWViu05eDuhBEjoYzHJGLFDEQUsCDyFr3v82vsX7KRJwccSlkkWaSXLEgtkZSxVQQVuTaOV7g2sBpVRQUFg4sFXEyFNEdhKnQJMolUDyGfL+zXuFwbAnKL6tYtlHM2XVrb2GprctwGOXg8fEw7maFhBIumTIszpGbWzZgrxC97WA051W4npBc+1fZQ4RUnik7/CygZJhbRiPZbLoLm9j8NxrXVhzaaaAnUgbC5FyRr5bnlW57K9q3w0cuGeMT4WUWeNxdY87BTIOgudRcXNrEE3pxPh8MTtHHL9ZhjZV7yNLPLK4suGjZSc7MQOoW7H1DX4Xh5kZY4ktJOykKLkCESAIhO4EkwXU6hImN7b/oPhWFTDQRwA3WKMLmO7ZR4mNtLk3Pxqjdg+z5hJxU9jK3sgAZV8OS0dto0Qd2nrI2oZbWzEsZnXDKd/FIR91By8idqzRr58Y63kMMhV2zg9yZVbMAVyvA2dNFA8S6Vu+yWAkhw4Et+9kd5ZL6kNI5bLoTooIUC5sABW4RQAABYAWAHICpFB6pSlApSlApSlBBqKUoPjjI80br1Rh8wRVe4dhUmwyFvZIFzzUgAhr+Vz8Ks9Udsd3GDnQC7IXVV6ksI1FBg4Bsyq+VlDC4zCx339Da49RWs4twplV1WITQSkmXD6XJ1PeQE2CyZjcpoGNyLEnNf0wEfcpDexjQKG3PhAFz1vbX1rUmOxMbizW23VgN2Q/eHXmOYGl4rjHEuzClS+FyypbuyzBmli1BtNHYtHILBM4GinVVOpruM4M4a0fiVsixEkEzu2RCsQS4Y52Jy38KgXNyM3b+Mdn45G70M0Uo0EsRyyC21zYhwOjA25WOtVXivZSWQ3kgixS31lgIgxNjYeJSRGzC17s1zytzsqNT9JmMKQYPhghki+rQpI4fKd41jRrxsVOveXNh4mtXP1Q9D1+HX0q7Y7h4MpMzcQYFRGRiopJbxhxIFEkUlwoZbgC4vrrXwGCw97CSUHuxGwEc3iiC6IB3Omqx87+G19bijafR5ijJg8fw0xSyGWEyxrGoJvlyk+NlAsyxEAakk2FU9FC2MjZQVf1VlLoFcHVTnQXG4DA+VWPhHDJs4EJ4kAVEZ7iM4YZBc2LySeJSzObNbf0qxcJ7DThi5MeEW91cHvsYb3ue8fwRnXUxj/csip4Xh73QOjozLlWGIH61PrvkOkaW3drLZQQGveundkeyBS02JyhgD3cMZPdQqd8l9XkYHxTHU3IU28VZ/B+E4XCA9yl3b25ZPFI56uzatrrrp0ArOn4hlDOTtuT16ebeXmOtSj7cSPd5cniLnKqDe/IADlpbl8BqN3wLhncJ4jmkfxO2+vug+6OX96xOz3C2B+szA96w8Kn/AA1PL8Z5222HO+9oFSKipFBNKUoFKUoFQamoNBFKUoFc57Xo8WKiUA5JJDISNsqjMb9PEQPUiujVXu3JY4Yxq2XvGCk63AALaWGhuBrQarDcaHWsqTHK65WAYb+YPIgjVSOo1rnSQ4+PZ451HKQWb9+LUftKa8rx6UlYWw8kbuyoCCJIvEwDXZSGXwljqBtvUVfGgkZcyEODfwMQsgF9LMbK+nXKfWtLxEsh8QZGvpmBU38r7/Cs3DzYWwCtLCQANyV001vmHyUGtnh3lIIjlinU7qdDboV8Wb4haCr/APys66d4T+OzfzXNYuI49ONQwH7C/wC1WrGQw926yYURk20tZC1wF/RnIdWGh36Vi4ThGCOpw63/AByEfIvRGgwvHZmF2kIGxtZR6G1hWwix9zYLI7EXVVUkvb3eTfA1b+HYDDIQyQRA+8EGYehOorW4zGl8a5U37pFiA/WYB21/aUHpkorRw4THTG8y/U4AdVBviZF/ENIF9PGdhl9obzsxhknmzZfsoP0aD2S3vnrbl569Kr/HuNtJmSLxhdzcrmNuu4HIeXmavPY7BtHh1MkYjdySUVs4UXIWzHcEWOw3tyojeUpSqFeqgVNApSlApSlArzXqvNApSlAqsdvJ8scXm5/lqz1UfpFQGOG+2dvnl0oKn9aU7ivg+IVpolvoodzfX2VyLqdvFIp+FfBsMeR+dfLC4cNMwJ1SK/oHe2tv+3zrKtg9uRr4Fa9Nw5rXXUeRv/Cvg0ci/wB6BxLi86qsYMsi50+zU5icjBtAx5Zb200Brxhu1MWbuzJkb3ZQY2+GcAN8Ca+CykTAtyje34iVUf8AiXr6yTK4yuFcdHAb+OtUWLD8fyeJtFAuT5dfOtBjOKNkVFsJcQDK4vfKJCWFzzupv6W61qzw/DoVWNWizMBljkKxm5uQyNcG4uNLHoa3OJLXN97WOgDEDYE2ufj0FBldm8CZJkiF7XuTz8218662qgCw2GlUr6OeH2V5yNSco9Bv/X8qu1IhSlKokVNQKmgUpSgUpSgg1FSaigUpSgVRfpJliJihmi7xGRjY3sLMvQg32+VXqqL9IQBlivb9Gf5v7UFGXAwD9DiJsP8Aqm0sY6WV/ZHlY1m8GmMJlbvlaRnAzxZl8CICqm9j7TuTy8VeWwynlXww2CBTPY6s/LpI6j8lqK3y8UDe2kch6lcr/vR2N/W9evrEB5yR+tpU+Zyt+ZrQjCdG+RryyOOdBl4iSN2cKwbJZbgEAkrmPtAEbjT86+DYcGtdgsMPE/fNGzOcyumaO6MUBDC7AEKNhyrLWHEcgkv/AGHuf3G8bH0A9KD7Q4IXvc7HY23/ACI8jpU4ThLs6xxTFATr4AyWUXPgFkGgI8IB13BN694GYhbSLZidiLMPIg7Hyq29j8Arv3gBt/RSG/NgnrlYUFs4HgzDBHGwGYIM+XbNYZreV9qzqUqoUpUigmlKUClKUClKUEVFeqUHmlTalqCKpXb/AAmd4jcjwnVSoO495SCNdvzFXWsfGYJJRZ1vbag5C2CflYj9YNEfgyZ1J9Qor78KmSKFUMJZbs2bMyyDvGZ8uZCQwBew02Aq7Y3sVE1zG7xn9U1o8T2WkjFs84I0zZBPGRfQ2QiRSRYkWIB52qK1ZXDOdJnU9JkWRR+1FlcepBr2eFki6So9tSEcE2tfVXs3wtyr4vwmUmwMMx92OTu5dv8ALmAP51o+0GEdIZAVmhfI2USoVBOU2AbVN9N6DJhmTIgO4RQb75reK/nmJNS0KNpbesCZQQPGl+Z1T5Wzjpuw9BXygilMiWXMisC5DKyhVN9crcyALb67UHzwWInLiNe6dS1gGDRsovzdbiw/AdBXb+y+DEeHQ2sWUGx1sLaDYdSdvvGuY/R9wfvpkkIup1/ZB8dwdRfRdRrmrstEKUpVCpFRXoUClKUClKUClKUClKUClKUClKUEWpappQY2LwUcoyyRo46Oob+Na2Xs3FYiOSWEEWsj5k2/y5MyfIVu6WoKVxX6P4JSXXwMd7CwJ57fwqqY76PpMPIk6p3gRj7I8QDKVOi7+10rr9qWoNF2T4QYIszj7STVuoHJfXXXzreUpQKUpQK9VAqaBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBUWqaUEWpaopQSKmlKBSlKBSlKBSlKD/2Q=="
    ]
  },
  {
    id: 4,
    name: "Harry Potter",
    category: "Books",
    price: 102,
    description:
      "Harry Potter is an ordinary boy who lives in a cupboard under the stairs at his Aunt Petunia" +
      "and Uncle Vernon's house, which he thinks is normal for someone like him who's parents have been killed in" +
      "a 'car crash'. He is bullied by them and his fat, spoilt cousin Dudley, and lives a very unremarkable life" +
      "with only the odd hiccup (like his hair growing back overnight!) to cause him much to think about. That is" +
      "until an owl turns up with a letter addressed to Harry and all hell breaks loose! He is literally rescued by a world where nothing is as it seems and magic lessons are the order of the day. Read and find out how Harry discovers his true heritage at Hogwarts School of Wizardry and Witchcraft, the reason behind his parents mysterious death, who is out to kill him, and how he uncovers the most amazing secret of all time, the fabled Philosopher's Stone! All this and muggles too. Now, what are they?",

    popular: true,
    imageUrls: [
      "https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg"
    ]
  },
  {
    id: 5,
    name: "DELL SE2717HR",
    category: "Computers",
    price: 102,
    description:
      "Amazing angles: Share consistent high-color fidelity with In-Plane Switching (IPS) technology across a 27-inch diagonal screen. A stunning vantage point for everyone, from almost anywhere" +
      "Distinctively modern and accessible: The contemporary thin profile is enhanced by the modern white and silver colors.The open wedge stand design provides convenient access to VGA and dual HDMI ports",

    popular: true,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/71kgK6fAvtL._SL1500_.jpg",
      "https://i5.walmartimages.com/asr/d2c34ad5-60b9-4aad-b807-5b19b8e31a63_1.b3a876b3ed8a7ac887903be841210134.jpeg"
    ]
  },

  {
    id: 7,
    name: "Swatch Skin",
    category: "Jewelry and Watches",
    price: 200,
    description: "",
    popular: false,
    imageUrls: [
      "https://static.swatch.com/images/product/SVUN105/sa000/SVUN105_sa000_sr8.jpg"
    ]
  },
  {
    id: 8,
    name: "Adidas Gazelle",
    category: "Clothing and Shoes",
    price: 55,
    description: "",
    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/71pqv%2BgdgzL._UL1500_.jpg"
    ]
  },
  {
    id: 9,
    name: "Bluetooth Keyboard, Vive Comb Rechargeable",
    category: "Computers",
    price: 55,
    description: "",
    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/71qNNgYCHYL._SL1500_.jpg"
    ]
  },
  {
    id: 10,
    name: "Swatch Blue Suit Mens Watch YGS747 Wrist Watch",
    category: "Jewelry and Watches",
    price: 120,
    description: "",

    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/418I4xAlUHL.jpg"
    ]
  },
  {
    id: 11,
    name: "DELL 23 S2340L 1920X1080 FULL HD",
    category: "Computers",
    price: 220,
    description:
      "This Certified Refurbished product is tested and certified to look and work like new. The refurbishing process includes functionality testing, basic cleaning, inspection, and repackaging. The product ships with all relevant accessories, a minimum 90-day warranty, and may arrive in a generic box. Only select sellers who maintain a high performance bar may offer Certified Refurbished products on Amazon.com",
    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/61NAgk5KMHL._SL1500_.jpg"
    ]
  },
  {
    id: 12,
    name: "Invicta Men's Pro Diver Collection Watch -Black",
    category: "Jewelry and Watches",
    price: 130,
    description:
      "Water resistant to 200 m (660 ft): In general, suitable for professional marine activity and serious surface water sports, but not scuba diving",

    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/71Wq1pmITgL._UY550_.jpg",
      "https://cdn2.jomashop.com/media/catalog/product/i/n/invicta-mako-pro-diver-automatic-men_s-watch-8926.jpg"
    ]
  },
  {
    id: 13,
    name: "Kuegou Class T-Shirt",
    category: "Clothing and Shoes",
    price: 5,
    description: "",
    popular: false,
    imageUrls: [
      "https://i.pinimg.com/originals/b6/71/59/b67159e3c8d3ca76cdd075ce42f20279.jpg"
    ]
  },
  {
    id: 14,
    name: "Roadster Shirt",
    category: "Clothing and Shoes",
    price: 7,
    description: "",
    popular: false,
    imageUrls: [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1979305/2018/4/3/11522753438599-HIGHLANDER-Men-Navy-Slim-Fit-Checked-Casual-Shirt-221522753438432-1.jpg"
    ]
  },
  {
    id: 15,
    name: "Allen Solly Shirt",
    category: "Clothing and Shoes",
    price: 8,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.boerandfitch.com/28504-large_default/light-green-checked-full-sleeve-shirt.jpg"
    ]
  },
  {
    id: 16,
    name: "Buffalo T-Shirt",
    category: "Clothing and Shoes",
    price: 5,
    description: "",
    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/91ZozlqlatL._UY550_.jpg"
    ]
  },
  {
    id: 17,
    name: "Marvel T-Shirt",
    category: "Clothing and Shoes",
    price: 7,
    description: "",
    popular: false,
    imageUrls: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1293766/2016/4/19/11461062180220-Kook-N-Keech-Marvel-White-Printed-T-shirt-9111461062179657-1.jpg"
    ]
  },
  {
    id: 17,
    name: "Marvel T-Shirt",
    category: "Clothing and Shoes",
    price: 7,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.beyoung.in/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/t/h/thor_red_t_shirt_mens-min_10.jpg"
    ]
  },
  {
    id: 17,
    name: "Marvel T-Shirt",
    category: "Clothing and Shoes",
    price: 7,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.redwolf.in/image/catalog/mens-t-shirts/marvel-captain-america-shield-full-sleeves-t-shirt-india-1.jpg"
    ]
  },
  {
    id: 18,
    name: "Skinny Men Brown Jeans",
    category: "Clothing and Shoes",
    price: 87,
    description: "",
    popular: false,
    imageUrls: [
      "https://rukminim1.flixcart.com/image/880/1056/jwzabgw0/jean/z/g/h/m-brown-1-tina-original-imafhjhtusskbp8y.jpeg?q=50"
    ]
  },
  {
    id: 19,
    name: "Slim Men Black Jeans",
    category: "Clothing and Shoes",
    price: 78,
    description: "",
    popular: false,
    imageUrls: [
      "https://rukminim1.flixcart.com/image/714/857/jpr86fk0/jean/n/p/n/32-89554ww10-gas-original-imafbuuxnyeyzjfu.jpeg?q=50"
    ]
  },
  {
    id: 20,
    name: "Pirates of the Caribbean Jack Sparrow",
    category: "Books",
    price: 99,
    description: "DescriptionPirates of the Caribbean: Jack Sparrow is a series for young readers of nine to twelve years written by Rob Kidd. The series is published by Disney Press and was written as a literary companion to the Pirates of the Caribbean films. The events in the series take place before the events in the movies",
      
    popular: true,
    imageUrls: [
      "data:image/jpeg;base64,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"
    ]
  },
  
];

// List of item categories.
const categories = [
  {
    name: "All categories",
    icon: "list"
  },
  {
    name: "Clothing and Shoes",
    icon: "group"
  },
  {
    name: "Jewelry and Watches",
    icon: "watch"
  },
  {
    name: "Books",
    icon: "menu_book"
  },
  {
    name: "Computers",
    icon: "computer"
  }
];

// Data for rendering menu.
const dataForTheMenu = [
  { name: "Home page", url: "/", icon: "home", id: 0 },
  {
    name: "Product categories",
    id: 1,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: i,
        url: "/?category=" + x.name,
        icon: x.icon
      };
    })
  }
];

export { sampleProducts, categories, dataForTheMenu };
