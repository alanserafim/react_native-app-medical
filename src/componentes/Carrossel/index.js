import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from "./styles"

const Carrosel = ({ data, tempoAnimacao = 1000 }) => {
  const carroselRef = useRef();
  const [indice, setIndice] = useState(0)

  function alteraPosicaoObjeto() {
    if (indice < data.length-1) {
      setIndice(indice + 1)
    }
    else {
      setIndice(0)
    }
  }

  useEffect(() => {
    carroselRef.current.scrollToIndex({ index: indice })
    const intervalo = setInterval(() => {
      alteraPosicaoObjeto()
    }, tempoAnimacao)

    return () => clearInterval(intervalo);
  }, [indice])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <Image
            source={item.imagem}
            style={[styles.image, index === (data.length -1) ? { marginRight: 200} : null ]}
            resizeMode="contain"
          />
        )}
        ref={carroselRef}
      />
    </View>
  )
}

export default Carrosel