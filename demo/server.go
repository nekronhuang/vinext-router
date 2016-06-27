package main

import (
	"fmt"
	"os"

	"../thrift_desc/gen-go/service/app"

	"git-wip-us.apache.org/repos/asf/thrift.git/lib/go/thrift"
)

type Me struct {
}

const addr = "127.0.0.1:9091"

func main() {
	// transportFactory := thrift.NewTFramedTransportFactory(thrift.NewTTransportFactory())
	transportFactory := thrift.NewTBufferedTransportFactory(8192)
	protocolFactory := thrift.NewTBinaryProtocolFactoryDefault()

	serverTransport, err := thrift.NewTServerSocket(addr)
	if err != nil {
		fmt.Println("server error: ", err)
		os.Exit(1)
	}

	handler := &Me{}

	processor := app.NewAppServiceProcessor(handler)

	server := thrift.NewTSimpleServer4(processor, serverTransport, transportFactory, protocolFactory)
	fmt.Println("server start at ", addr)
	server.Serve()
}

func (this *Me) GetMe() (me *app.MeRes, err error) {
	var config = app.Config{
		Autoplay:    true,
		TagDuration: 5,
		TagTrack:    true,
	}
	var data = app.MeRes{
		Status: 200,
		Msg:    &config,
	}
	return &data, nil
}
