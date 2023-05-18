using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Breshop.Migrations
{
    public partial class UpdateTabPedido : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DT_PEDIDO",
                table: "Pedido",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DT_PEDIDO",
                table: "Pedido");
        }
    }
}
